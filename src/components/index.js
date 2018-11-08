import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Index extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            shelfs: [
                {id:1, name: 'Currently Reading'},
                {id:2, name: 'Want To Read'},
                {id:3, name: 'Read123'}
            ]
        }
    }

  render() {

    const books = this.props.books;

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf 
                        shelfTitle='Currently Reading'
                        books={this.props.shelfCurrentlyReading}
                        onChange={this.props.onChange}
                        allBooks={books} > 
                    
                    </Bookshelf>

                    <Bookshelf 
                        shelfTitle='Want To Read'
                        books={this.props.sheflWantToRead}
                        onChange={this.props.onChange}
                        allBooks={books} > 
                    
                    </Bookshelf>

                    <Bookshelf 
                        shelfTitle='Read'
                        books={this.props.shelfRead}
                        onChange={this.props.onChange}
                        allBooks={books} > 

                    </Bookshelf>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        </div>
    )
  }
}

export default Index;