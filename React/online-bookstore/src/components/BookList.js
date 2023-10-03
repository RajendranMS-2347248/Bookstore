// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../api/apiService'; // Import the API function

function BookList() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      fetchBooks(searchQuery)
        .then((data) => {
          // Update the 'books' state with the fetched data
          setBooks(data);
        })
        .catch((error) => {
          console.error('Error fetching books:', error);
        });
    }
  }, [searchQuery]);

  
return (
    <div>
      <h2>Book List</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
  
}

export default BookList;