import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";

export default function AddBook(props) {

    const handleInputChange = (e) => {
        props.getAllFromSearch(e, e.target.value)
    }

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link to="/" className="close-search" onClick={props.ClearSearchList}>
              Close
            </Link>
          </div>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={(e) => handleInputChange(e)}/>
          </div>
        </div>
        <div className="search-books-results">
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
