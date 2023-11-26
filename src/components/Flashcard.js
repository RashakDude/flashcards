// Flashcard.js
import React from 'react';
import "../App.css";

const Flashcard = ({ question, answer }) => {
  return (
    <div className="flashcard">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default Flashcard;
