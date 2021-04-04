import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BooksList from "./BooksList";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({
        books: books
      });
    });
  }

  handleChangeShelf = (e, book, shelf) => {
    e.preventDefault();
    BooksAPI.update(book, shelf);
    this.setState({
      books: this.state.books.map((b) => {
        if(b.id === book.id) {
          b.shelf = shelf;
        }
        return b
      })
    });
    
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList
              booksList={this.state.books}
              handleChangeShelf={this.handleChangeShelf}
            />
          )}
        />


        {/* <Route
          path="/search"
          render={({ history }) => (
            <AddBook
              onCreateContact={(contact) => {
                this.onCreateContact(contact);
                history.push("/");
              }}
            />
          )}
        /> */}
      </div>
    );
  }
}

export default BooksApp;
