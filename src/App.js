import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import * as BooksAPI from './API/BooksAPI';
import Index from './components/index';
import SearchIndex from './components/SearchIndex';
import './App.css'

class BooksApp extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      books: [],
      bookShelf: {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        none: []
      }
    }
  }
  
  componentDidMount() {
    this.bookDetailsFetch();
  }

  componentWillUnmount(){
    this.bookDetailsFetch();
  }

  searchUpdate = () => {
    this.bookDetailsFetch();
    this.componentWillUnmount();
  }

  bookDetailsFetch = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        bookShelf:{ 
          currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
          wantToRead: books.filter(book => book.shelf === 'wantToRead'),
          read: books.filter(book => book.shelf === 'read')
        }
      })
    })
  }

  newBookDetails = (addShelf, book, books) => {

    BooksAPI.update(book, addShelf).then(res => {
    
      book.shelf = addShelf
  
      this.setState(state => ({
        books:books,
        bookShelf:{ 
          currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
          wantToRead: books.filter(book => book.shelf === 'wantToRead'),
          read: books.filter(book => book.shelf === 'read'),
          none: []
        }
      
      }))
    })
  }

  render() {

    return (
      <div className="app">
        
        <Route exact path="/" 
          render={() => (
            <Index 
              books={this.state.books} 
              shelfRead={this.state.bookShelf.read}
              sheflWantToRead={this.state.bookShelf.wantToRead}
              shelfCurrentlyReading={this.state.bookShelf.currentlyReading}
              onChange={this.newBookDetails} />
          )}
        />

        <Route exact path="/search" 
          render={({history}) => (
            <SearchIndex
              onChange={this.newBookDetails} 
              books={this.state.books}
              shelfs={this.state.bookShelf}
              stepSearch={this.searchUpdate} />
            )}
          />
      </div>
    )
  }
}

export default BooksApp
