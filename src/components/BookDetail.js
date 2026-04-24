import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../books";

function BookDetail() {
  const { id } = useParams();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="detail-container">
        <h2>Book Not Found</h2>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <div className="book-detail-card">
        
        <h1>{book.title}</h1>
        <h3>Author: {book.author}</h3>
        
        {book.imageUrl && (
          <img src={book.imageUrl} alt={book.title} />
        )}

        
        <p>{book.description}</p>

        <Link to="/">
          <button className="back-btn">
            ⬅ Back to Book List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookDetail;