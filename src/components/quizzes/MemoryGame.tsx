
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Puzzle } from "lucide-react";

interface MemoryGameProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MemoryCard {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ isOpen, onClose }) => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const cardValues = ["🌟", "🌈", "🌞", "🌺", "🌻", "🌴", "🍎", "🍓"];
  const totalPairs = cardValues.length;

  const initializeGame = () => {
    // Create pairs of cards
    const newCards: MemoryCard[] = [];
    cardValues.forEach((value, index) => {
      // Create two cards with the same value (a pair)
      newCards.push({ id: index * 2, value, flipped: false, matched: false });
      newCards.push({ id: index * 2 + 1, value, flipped: false, matched: false });
    });

    // Shuffle the cards
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    setCards(newCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameStarted(true);
    setGameCompleted(false);
  };

  const handleCardClick = (id: number) => {
    if (!gameStarted || gameCompleted) return;
    
    // Ignore if this card is already flipped or already matched
    if (cards[id].flipped || cards[id].matched) return;
    
    // Ignore if two cards are already flipped and not yet processed
    if (flippedCards.length === 2) return;
    
    // Flip the card
    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);
    
    // Add this card to flippedCards
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    
    // If we've flipped two cards, check for a match
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        // We have a match!
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].matched = true;
          matchedCards[secondIndex].matched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs(matchedPairs + 1);
          
          // Check if game is completed
          if (matchedPairs + 1 === totalPairs) {
            setGameCompleted(true);
            toast({
              title: "Memory Game Completed!",
              description: `Great job! You completed the game in ${moves + 1} moves.`,
              duration: 5000,
            });
          }
        }, 500);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[firstIndex].flipped = false;
          resetCards[secondIndex].flipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleReset = () => {
    initializeGame();
  };

  const handleClose = () => {
    onClose();
    setGameStarted(false);
  };

  // Initialize game when dialog is opened
  useEffect(() => {
    if (isOpen) {
      initializeGame();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="relative">
          <div className="absolute -top-12 -left-12 w-24 h-24 text-perself-primary opacity-20">
            <Puzzle size={96} className="transform -rotate-12" />
          </div>
          <DialogTitle className="flex items-center gap-2">
            <Puzzle className="h-5 w-5 text-perself-primary" />
            Memory Game
          </DialogTitle>
          <DialogDescription>
            Match pairs of cards to test and improve your memory. Try to complete the game in as few moves as possible.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="flex justify-between items-center mb-4">
            <p className="font-medium">Moves: {moves}</p>
            <p className="font-medium">Matches: {matchedPairs}/{totalPairs}</p>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            {cards.map((card, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                className={`h-16 flex items-center justify-center border-2 rounded-md cursor-pointer text-2xl transition-all transform hover:scale-105 ${
                  card.flipped || card.matched
                    ? "bg-gradient-to-r from-perself-primary/20 to-perself-accent/30 border-perself-primary"
                    : "bg-white border-gray-200 hover:border-perself-primary/50"
                } ${card.matched ? "animate-pulse" : ""}`}
              >
                {(card.flipped || card.matched) ? card.value : ""}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute -bottom-8 right-0 w-16 h-16 text-perself-primary opacity-20">
          <Puzzle size={64} className="transform rotate-12" />
        </div>
        
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleReset} className="border-perself-primary/30 hover:bg-perself-primary/10">
            Reset Game
          </Button>
          <Button type="button" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MemoryGame;
