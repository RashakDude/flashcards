// FlashcardDeck.js
import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "../App.css"; // Import the CSS file

const FlashcardDeck = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  // Check if flashcards array is empty
  if (flashcards.length === 0) {
    return <div>No flashcards available</div>;
  }

  return (
    <div className="flashcard-deck">
      <Flashcard
        question={flashcards[currentCard]?.question}
        answer={<div dangerouslySetInnerHTML={{ __html: flashcards[currentCard]?.answer }} />}
      />
      <button className="button" onClick={handleNextCard}>
        Next Question
      </button>
    </div>
  );
};

export default FlashcardDeck;
