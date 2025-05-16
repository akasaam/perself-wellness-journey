
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { StarHalf } from "lucide-react";

interface SelfEsteemQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

const SelfEsteemQuiz: React.FC<SelfEsteemQuizProps> = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "I feel that I am a person of worth, at least on an equal plane with others.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
    },
    {
      question: "I feel that I have a number of good qualities.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
    },
    {
      question: "I am able to do things as well as most other people.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
    },
    {
      question: "I take a positive attitude toward myself.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
    },
    {
      question: "On the whole, I am satisfied with myself.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
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

  const calculateSelfEsteemLevel = () => {
    // Simple scoring algorithm for demo purposes
    let score = 0;
    
    answers.forEach((answer) => {
      if (answer === "Strongly Agree") score += 3;
      else if (answer === "Agree") score += 2;
      else if (answer === "Disagree") score += 1;
      else if (answer === "Strongly Disagree") score += 0;
    });
    
    // Calculate level based on total possible score of 15
    if (score >= 12) return "High";
    if (score >= 8) return "Moderate";
    return "Low";
  };

  const handleFinish = () => {
    const selfEsteemLevel = calculateSelfEsteemLevel();
    toast({
      title: `Your Self-Esteem Level: ${selfEsteemLevel}`,
      description: "Thank you for completing the self-esteem assessment. Consider exploring our resources for building confidence and positive self-image.",
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
          <div className="p-6 bg-gradient-to-r from-perself-primary/20 to-perself-accent/30 rounded-lg mb-6 border border-perself-primary/20 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 text-perself-primary opacity-10">
              <StarHalf size={80} className="transform rotate-12" />
            </div>
            <p className="text-xl mb-2">Self-Esteem Level: <span className="font-bold">{calculateSelfEsteemLevel()}</span></p>
            <p className="text-muted-foreground">
              Based on your responses, you appear to have a {calculateSelfEsteemLevel().toLowerCase()} level of self-esteem. 
              {calculateSelfEsteemLevel() === "Low" ? 
                " Working with a therapist can help you develop a healthier self-image and build confidence." : 
                " Continue practicing self-affirmation and recognizing your worth and accomplishments."}
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
            <StarHalf size={80} className="transform -rotate-12" />
          </div>
          <DialogTitle className="flex items-center gap-2">
            <StarHalf className="h-5 w-5 text-perself-primary" />
            Self-Esteem Assessment Quiz
          </DialogTitle>
          <DialogDescription>
            Answer the following questions honestly to evaluate your current self-esteem levels.
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

export default SelfEsteemQuiz;
