import React from "react";
import { Link } from "react-router-dom";
import books from "../books";

function BookList() {
  return (
    <div className="main-container">
      <h1 className="heading"> Book Explorer</h1>

      <div className="book-list-container">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>

            <Link to={`/books/${book.id}`} className="view-link">
              View Details
            </Link>

            <br /><br />

            <Link to={`/books/${book.id}`}>
              <button className="read-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;