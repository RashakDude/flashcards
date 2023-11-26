// App.js
import { useState, useEffect } from 'react';
import FlashcardDeck from './components/FlashcardDeck';
import flashcardsData from './assets/flashcards.json'; // Adjust the path accordingly

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    setFlashcards(flashcardsData);
  }, []);

  return (
    <div className="App">
      <h1>Data Structures and Algorithms</h1>
      <FlashcardDeck flashcards={flashcards} />
    </div>
  );
};

export default App;
