import React from "react";
import Book from "./Book.js";

export default function Shelf(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.booksList.map((book) => {
              return <Book key={book.id} book={book} handleChangeShelf={props.handleChangeShelf}/>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
