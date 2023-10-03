import React, { useState } from 'react';
function ReviewForm() {
    const [review, setReview] = useState('');
  
    const handleReviewSubmit = (e) => {
      e.preventDefault();
      // Send the review data to your backend for storage
      // Reset the form after submission
      setReview('');
    };
  
    return (
      <div>
        <h2>Submit a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default ReviewForm;