import React, {Component} from 'react';
import Book from './Book';

class Booksshelf extends Component {
  
  render() {

    return(
      
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book, index) => {
                return ( <li key={book.id} className="book-grid">
                  <Book book={book} books={this.props.allBooks} key={book.id} onChange={this.props.onChange} />
                </li>
                )
              })}
              
            </ol>
          </div>
      </div>
    )
  }

}

export default Booksshelf;