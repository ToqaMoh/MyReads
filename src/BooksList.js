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
              <Link to="/search" className="open-search"  onClick={props.NewSearchList}>Add a book</Link>
            </div>
        </div>
    )
}