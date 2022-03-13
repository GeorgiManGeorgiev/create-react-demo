/* eslint-disable no-useless-constructor */
import { Component } from 'react';

import React from 'react';

import Book from './Book';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { books } = this.props;
    return (

      <div className="book-list">

        <h2>Our book collection</h2>
        {books.map((x) => <Book title={x.title} description={x.description} />)}

      </div>
    );
  }
}
export default BookList;
