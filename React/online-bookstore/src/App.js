// src/App.js
import React from 'react';
import './App.css'; // You can include your CSS styles here if needed
import Header from './components/Header';
import BookList from './components/BookList';
import ReviewForm from './components/ReviewForm';
import BookItem from './components/BookItem';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BookList />
        <ReviewForm />
      </main>
    </div>
  );
}

export default App;
