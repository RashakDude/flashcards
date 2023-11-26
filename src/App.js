// App.js
import React from 'react';
import FlashcardDeck from './components/FlashcardDeck';


const App = () => {
  const flashcards = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // Add more flashcards as needed
  ];

  return (
    <div className="App">
      <h1>Data Structures and Algorithms</h1>
      <FlashcardDeck flashcards={flashcards} />
    </div>
  );
};

export default App;
