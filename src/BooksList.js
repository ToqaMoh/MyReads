import React from 'react'
import { Link } from "react-router-dom";
import Shelf from './Shelf'

export default function BooksList(props) {

    const shelves = [
        {value: 'currentlyReading', title: 'Currently Reading'},
        {value: 'wantToRead', title: 'Want to Read'},
        {value: 'read', title: 'Read'},
    ]

    return (
        <div>
            {shelves.map((shelf) => {
                return(
                <Shelf key={shelf.value} title={shelf.title} booksList={props.booksList.filter((book) => book.shelf === shelf.value)} handleChangeShelf={props.handleChangeShelf}/>
                )
            })}
            <div className="open-search">
              <Link to="/search" className="open-search">Add a book</Link>
            </div>
        </div>
    )
}





// import React, { useState, useEffect } from 'react'
// import { Link } from "react-router-dom";

// export default function BooksList(props) {
//     const [books, setbooks] = useState([]);

//     useEffect(() => {
//         debugger
//         setbooks(props.booksList)
//     }, [ props.booksList ])

//     const handleShelfChange = (event, book) => {
//         props.handleChangeShelf(event, book, event.target.value);
//       }

//       return (
//         <div>
//           <div className="list-books">
//             <div className="list-books-title">
//               <h1>MyReads</h1>
//             </div>
//             <div className="list-books-content">
//               <div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Currently Reading</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                       {props.booksList.filter(({id}) =>  props.currentlyReading.includes(id))
//                         .map((book) => {
//                           return (
//                             <li key={book.id}>
//                               <div className="book">
//                                 <div className="book-top">
//                                   <div
//                                     className="book-cover"
//                                     style={{
//                                       width: 128,
//                                       height: 193,
//                                       backgroundImage: `url(${
//                                         book.imageLinks.thumbnail
//                                       })`,
//                                     }}
//                                   />
//                                   <div className="book-shelf-changer">
//                                     <select
//                                       value={book.shelf}
//                                       onChange={(e) =>
//                                         handleShelfChange(e, book)
//                                       }
//                                     >
//                                       <option value="move" disabled>
//                                         Move to...
//                                       </option>
//                                       <option value="currentlyReading">
//                                         Currently Reading
//                                       </option>
//                                       <option value="wantToRead">
//                                         Want to Read
//                                       </option>
//                                       <option value="read">Read</option>
//                                       <option value="none">None</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                                 <div className="book-title">{book.title}</div>
//                                 <div className="book-authors">
//                                   {book.authors
//                                     .map((author) => author)
//                                     .reduce((prevAuthor, currAuthor) => [
//                                       prevAuthor,
//                                       ", ",
//                                       currAuthor,
//                                     ])}
//                                 </div>
//                               </div>
                            
//                             </li>
//                           );
//                         })}
//                     </ol>
                  
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Want to Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                     {props.booksList.filter(({id}) =>  props.wantToRead.includes(id))
//                         .map((book) => {
//                           return (
//                             <li key={book.id}>
//                               <div className="book">
//                                 <div className="book-top">
//                                   <div
//                                     className="book-cover"
//                                     style={{
//                                       width: 128,
//                                       height: 193,
//                                       backgroundImage: `url(${
//                                         book.imageLinks.thumbnail
//                                       })`,
//                                     }}
//                                   />
//                                   <div className="book-shelf-changer">
//                                     <select
//                                       value={book.shelf}
//                                       onChange={(e) =>
//                                         handleShelfChange(e, book)
//                                       }
//                                     >
//                                       <option value="move" disabled>
//                                         Move to...
//                                       </option>
//                                       <option value="currentlyReading">
//                                         Currently Reading
//                                       </option>
//                                       <option value="wantToRead">
//                                         Want to Read
//                                       </option>
//                                       <option value="read">Read</option>
//                                       <option value="none">None</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                                 <div className="book-title">{book.title}</div>
//                                 <div className="book-authors">
//                                   {book.authors
//                                     .map((author) => author)
//                                     .reduce((prevAuthor, currAuthor) => [
//                                       prevAuthor,
//                                       ", ",
//                                       currAuthor,
//                                     ])}
//                                 </div>
//                               </div>
//                             </li>
//                           );
//                         })}
//                     </ol>
//                   </div>
//                 </div>
//                 <div className="bookshelf">
//                   <h2 className="bookshelf-title">Read</h2>
//                   <div className="bookshelf-books">
//                     <ol className="books-grid">
//                     {props.booksList.filter(({id}) =>  props.read.includes(id))
//                         .map((book) => {
//                           return (
//                             <li key={book.id}>
//                               <div className="book">
//                                 <div className="book-top">
//                                   <div
//                                     className="book-cover"
//                                     style={{
//                                       width: 128,
//                                       height: 193,
//                                       backgroundImage: `url(${
//                                         book.imageLinks.thumbnail
//                                       })`,
//                                     }}
//                                   />
//                                   <div className="book-shelf-changer">
//                                     <select
//                                       value={book.shelf}
//                                       onChange={(e) =>
//                                         handleShelfChange(e, book)
//                                       }
//                                     >
//                                       <option value="move" disabled>
//                                         Move to...
//                                       </option>
//                                       <option value="currentlyReading">
//                                         Currently Reading
//                                       </option>
//                                       <option value="wantToRead">
//                                         Want to Read
//                                       </option>
//                                       <option value="read">Read</option>
//                                       <option value="none">None</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                                 <div className="book-title">{book.title}</div>
//                                 <div className="book-authors">
//                                   {book.authors
//                                     .map((author) => author)
//                                     .reduce((prevAuthor, currAuthor) => [
//                                       prevAuthor,
//                                       ", ",
//                                       currAuthor,
//                                     ])}
//                                 </div>
//                               </div>
//                             </li>
//                           );
//                         })}
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="open-search">
//               <Link to="/search" className="open-search">Add a book</Link>
//             </div>
//           </div>
//         </div>
//       );
// }



// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class BooksList extends Component {
//   state = {
//     books: [],
//   };

//   static getDerivedStateFromProps(props, state) {
//     return { books: props.booksList };
//   }

//   handleShelfChange(event, book) {
//     this.props.addToCurrentlyReading(event, book, event.target.value);
//   }

//   render() {
//     return (
//       <div>
//         <div className="list-books">
//           <div className="list-books-title">
//             <h1>MyReads</h1>
//           </div>
//           <div className="list-books-content">
//             <div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Currently Reading</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.state.books
//                       .filter((book) => book.shelf === "currentlyReading")
//                       .map((book) => {
//                         return (
//                           <li key={book.id}>
//                             <div className="book">
//                               <div className="book-top">
//                                 <div
//                                   className="book-cover"
//                                   style={{
//                                     width: 128,
//                                     height: 193,
//                                     backgroundImage: `url(${
//                                       book.imageLinks.thumbnail
//                                     })`,
//                                   }}
//                                 />
//                                 <div className="book-shelf-changer">
//                                   <select
//                                     value={book.shelf}
//                                     onChange={(e) =>
//                                       this.handleShelfChange(e, book)
//                                     }
//                                   >
//                                     <option value="move" disabled>
//                                       Move to...
//                                     </option>
//                                     <option value="currentlyReading">
//                                       Currently Reading
//                                     </option>
//                                     <option value="wantToRead">
//                                       Want to Read
//                                     </option>
//                                     <option value="read">Read</option>
//                                     <option value="none">None</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="book-title">{book.title}</div>
//                               <div className="book-authors">
//                                 {book.authors
//                                   .map((author) => author)
//                                   .reduce((prevAuthor, currAuthor) => [
//                                     prevAuthor,
//                                     ", ",
//                                     currAuthor,
//                                   ])}
//                               </div>
//                             </div>
//                           </li>
//                         );
//                       })}
//                   </ol>
//                 </div>
//               </div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Want to Read</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.state.books
//                       .filter((book) => book.shelf === "wantToRead")
//                       .map((book) => {
//                         return (
//                           <li key={book.id}>
//                             <div className="book">
//                               <div className="book-top">
//                                 <div
//                                   className="book-cover"
//                                   style={{
//                                     width: 128,
//                                     height: 193,
//                                     backgroundImage: `url(${
//                                       book.imageLinks.thumbnail
//                                     })`,
//                                   }}
//                                 />
//                                 <div className="book-shelf-changer">
//                                   <select
//                                     value={book.shelf}
//                                     onChange={(e) =>
//                                       this.handleShelfChange(e, book)
//                                     }
//                                   >
//                                     <option value="move" disabled>
//                                       Move to...
//                                     </option>
//                                     <option value="currentlyReading">
//                                       Currently Reading
//                                     </option>
//                                     <option value="wantToRead">
//                                       Want to Read
//                                     </option>
//                                     <option value="read">Read</option>
//                                     <option value="none">None</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="book-title">{book.title}</div>
//                               <div className="book-authors">
//                                 {book.authors
//                                   .map((author) => author)
//                                   .reduce((prevAuthor, currAuthor) => [
//                                     prevAuthor,
//                                     ", ",
//                                     currAuthor,
//                                   ])}
//                               </div>
//                             </div>
//                           </li>
//                         );
//                       })}
//                   </ol>
//                 </div>
//               </div>
//               <div className="bookshelf">
//                 <h2 className="bookshelf-title">Read</h2>
//                 <div className="bookshelf-books">
//                   <ol className="books-grid">
//                     {this.state.books
//                       .filter((book) => book.shelf === "read")
//                       .map((book) => {
//                         return (
//                           <li key={book.id}>
//                             <div className="book">
//                               <div className="book-top">
//                                 <div
//                                   className="book-cover"
//                                   style={{
//                                     width: 128,
//                                     height: 193,
//                                     backgroundImage: `url(${
//                                       book.imageLinks.thumbnail
//                                     })`,
//                                   }}
//                                 />
//                                 <div className="book-shelf-changer">
//                                   <select
//                                     value={book.shelf}
//                                     onChange={(e) =>
//                                       this.handleShelfChange(e, book)
//                                     }
//                                   >
//                                     <option value="move" disabled>
//                                       Move to...
//                                     </option>
//                                     <option value="currentlyReading">
//                                       Currently Reading
//                                     </option>
//                                     <option value="wantToRead">
//                                       Want to Read
//                                     </option>
//                                     <option value="read">Read</option>
//                                     <option value="none">None</option>
//                                   </select>
//                                 </div>
//                               </div>
//                               <div className="book-title">{book.title}</div>
//                               <div className="book-authors">
//                                 {book.authors
//                                   .map((author) => author)
//                                   .reduce((prevAuthor, currAuthor) => [
//                                     prevAuthor,
//                                     ", ",
//                                     currAuthor,
//                                   ])}
//                               </div>
//                             </div>
//                           </li>
//                         );
//                       })}
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="open-search">
//             <Link to="/search">Add a book</Link>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
