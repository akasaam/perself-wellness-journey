
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ClipboardCheck } from "lucide-react";

interface StressQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const StressQuiz: React.FC<StressQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "How often do you feel overwhelmed by your responsibilities?",
      options: ["Rarely", "Sometimes", "Often", "Almost always"],
    },
    {
      question: "How would you rate your ability to relax when needed?",
      options: ["Excellent", "Good", "Fair", "Poor"],
    },
    {
      question: "How often do you experience physical symptoms of stress (headaches, muscle tension, etc.)?",
      options: ["Rarely", "Sometimes", "Often", "Almost always"],
    },
    {
      question: "How well do you sleep at night?",
      options: ["Very well", "Well", "Not well", "Poorly"],
    },
    {
      question: "How often do you feel irritable or short-tempered?",
      options: ["Rarely", "Sometimes", "Often", "Almost always"],
    },
  ];

  const handleAnswerSelection = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateStressLevel = () => {
    // Simple scoring algorithm for demo purposes
    let stressScore = 0;
    
    answers.forEach((answer, index) => {
      const question = questions[index];
      const answerIndex = question.options.indexOf(answer);
      
      // For negative questions (0, 2, 4)
      if (index === 0 || index === 2 || index === 4) {
        stressScore += answerIndex;
      } 
      // For positive questions (1, 3)
      else {
        stressScore += (3 - answerIndex);
      }
    });
    
    // Calculate percentage
    const maxScore = questions.length * 3;
    const percentage = Math.round((stressScore / maxScore) * 100);
    
    if (percentage < 30) return "Low";
    if (percentage < 70) return "Moderate";
    return "High";
  };

  const handleFinish = () => {
    const stressLevel = calculateStressLevel();
    toast({
      title: `Your Stress Level: ${stressLevel}`,
      description: "Thank you for completing the stress assessment. Consider booking a session with one of our counselors for personalized stress management techniques.",
      duration: 5000,
    });
    onClose();
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const renderQuestionContent = () => {
    if (showResults) {
      return (
        <div className="py-4">
          <h3 className="text-lg font-medium mb-4">Your Results</h3>
          <div className="p-6 bg-gradient-to-r from-perself-accent/20 to-perself-primary/30 rounded-lg mb-6 border border-perself-primary/20 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 text-perself-primary opacity-10">
              <ClipboardCheck size={80} className="transform rotate-12" />
            </div>
            <p className="text-xl mb-2">Stress Level: <span className="font-bold">{calculateStressLevel()}</span></p>
            <p className="text-muted-foreground">
              Based on your responses, you appear to be experiencing a {calculateStressLevel().toLowerCase()} level of stress. 
              {calculateStressLevel() === "High" ? 
                " We recommend scheduling a consultation with one of our therapists to discuss stress management techniques." : 
                " Consider practicing regular mindfulness and relaxation techniques to maintain your well-being."}
            </p>
          </div>
        </div>
      );
    }
    
    const question = questions[currentQuestion];
    return (
      <div className="py-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Question {currentQuestion + 1} of {questions.length}</h3>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${
                  index === currentQuestion 
                    ? "bg-perself-primary" 
                    : index < currentQuestion 
                      ? "bg-perself-primary/40" 
                      : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="mb-4 text-lg">{question.question}</p>
        
        <RadioGroup 
          value={answers[currentQuestion] || ""} 
          onValueChange={handleAnswerSelection}
          className="space-y-3"
        >
          {question.options.map((option) => (
            <div 
              key={option} 
              className="flex items-center space-x-2 border p-3 rounded-md hover:bg-muted/50 transition-colors hover:border-perself-primary/30"
            >
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 text-perself-primary opacity-15">
            <ClipboardCheck size={80} className="transform -rotate-12" />
          </div>
          <DialogTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-perself-primary" />
            Stress Assessment Quiz
          </DialogTitle>
          <DialogDescription>
            Answer the following questions honestly to evaluate your current stress levels.
          </DialogDescription>
        </DialogHeader>
        
        {renderQuestionContent()}
        
        <DialogFooter className="flex justify-between sm:justify-between">
          {!showResults ? (
            <>
              <Button 
                type="button" 
                variant="outline" 
                onClick={handlePreviousQuestion} 
                disabled={currentQuestion === 0}
                className="border-perself-primary/30 hover:bg-perself-primary/10"
              >
                Previous
              </Button>
              <Button 
                type="button" 
                onClick={handleNextQuestion} 
                disabled={!answers[currentQuestion]}
                className="bg-gradient-to-r from-perself-primary to-perself-secondary"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              </Button>
            </>
          ) : (
            <Button 
              type="button" 
              onClick={handleFinish} 
              className="w-full bg-gradient-to-r from-perself-primary to-perself-secondary"
            >
              Finish
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StressQuiz;
