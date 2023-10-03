import React from 'react';

function BookItem({ book }) {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <img src={book.coverImage} alt={`Cover for ${book.title}`} />
      <button>Submit Review</button>
    </li>
  );
}

export default BookItem;