import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BooksList from "./BooksList.js";
import AddBook from "./AddBook.js";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchList: []
  };

  async componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  }

  getAllFromSearch = (e, query) => {
    e.preventDefault();
    if (query === "") {
      this.setState({
        searchList: [],
      });
    } else {
      BooksAPI.search(query).then((books) => {
        if (books === undefined || books.error) {
          this.setState({
            searchList: [],
          });
        } else {
          const shelfBooks = this.state.books;
          const SearchList = books.map(function(book) {
            if (shelfBooks.some((b) => b.id === book.id)) {
              const filteredBook = shelfBooks.filter(
                (oldBook) => oldBook.id === book.id
              );
              book = filteredBook[0];
              return book;
            } else {
              return book;
            }
          });

          this.setState({
            searchList: SearchList,
          });
        }
      });
    }
  };

  ClearSearchList = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
      });
    });
  };

  NewSearchList = () => {
    this.setState({
      searchList: [],
    });
  };

  handleChangeShelf = (e, book, shelf) => {
    e.preventDefault();
    if (book.shelf === undefined) {
      book.shelf = shelf;
      BooksAPI.update(book, shelf).then(() => {
        BooksAPI.getAll().then((books) => {
          this.setState({
            books: books
          });
        });
      });
    } else {
      BooksAPI.update(book, shelf).then(() => {
        this.setState({
          books: this.state.books.map((b) => {
            if (b.id === book.id) {
              b.shelf = shelf;
            }
            return b;
          }),
        });
      });
    }
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
              NewSearchList={this.NewSearchList}
            />
          )}
        />

        <Route
          path="/search"
          render={({ history }) => (
            <AddBook
              booksList={this.state.searchList}
              getAllFromSearch={this.getAllFromSearch}
              handleChangeShelf={(e, book, shelf) => {
                this.handleChangeShelf(e, book, shelf);
                history.push("/");
              }}
              ClearSearchList={this.ClearSearchList}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
