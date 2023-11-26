// FlashcardDeck.js
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../App.css'; // Import the CSS file

const FlashcardDeck = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNextCard = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length);
  };

  return (
    <div className="flashcard-deck">
      <Flashcard
        question={flashcards[currentCard].question}
        answer={flashcards[currentCard].answer}
      />
      <button className="button" onClick={handleNextCard}>Next Question</button>
    </div>
  );
};

export default FlashcardDeck;
