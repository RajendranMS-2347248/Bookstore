// src/api/apiService.js

const apiUrl = 'https://api.example.com'; // Replace with your API URL

// Function to fetch books based on a search query
export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${apiUrl}/books?query=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Function to submit a book review
export const submitReview = async (reviewData) => {
  try {
    const response = await fetch(`${apiUrl}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
