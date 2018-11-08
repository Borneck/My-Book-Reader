import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../API/BooksAPI'

class SearchIndex extends Component {
 constructor(props) {
   super(props);
    
   this.state = {
    books: [],
    book: [],
    Books: [],
    query: ''
    }
  }


  onChangeHandle = (event) => {
    var value = event.target.value
    this.setState(() => {
      return {query: value}
    })
    this.searchBooks(value)
  }

  changeBookShelf = (books) => {
    let allBooks = this.props.books;
    
    for (let book of books) {
      book.shelf = "none"

      for (let b of allBooks) {
        if (b.id === book.id) {

          book.shelf = b.shelf
        }
      }
    }
    return books
  }

  searchBooks = (val) => {
    if (val.length !== 0) {
      
      BooksAPI.search(val).then((books) => {
        if (books.length > 0) {
          books = books.filter((book) => (book.imageLinks))
          books = this.changeBookShelf(books)
          this.setState(() => {
            return {Books: books, books: this.props.books.concat(this.state.book) }
          })
        }
      })
    } else {
      this.setState({Books: [], query: ''})
    }
  }

  bookAddShelf = (book, shelf) => {
    
    this.setState({
      books: this.state.books.concat(book)
    })
    
    this.props.onChange(shelf, book, this.state.books.concat(book));
    this.props.stepSearch(shelf, book, this.state.books);
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.onChangeHandle}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 && this.state.Books.map((book, index) => (<Book book={book} key={index} books={this.state.Books} onChange={(shelf) => {
              this.bookAddShelf(book, shelf)
            }}/>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchIndex;
