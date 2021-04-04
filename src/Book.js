import React from "react";

export default function Book(props) {

    const handleOnChange = (event, book) => {
        props.handleChangeShelf(event, book, event.target.value);
    }

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={props.book.shelf}
              onChange={(e) => handleOnChange(e, props.book)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          {props.book.authors
            .map((author) => author)
            .reduce((prevAuthor, currAuthor) => [prevAuthor, ", ", currAuthor])}
        </div>
      </div>
    </div>
  );
}
