import React from 'react';
import Heading from './components/HeadingFuncComp';
import Body from './components/Body';
import BookList from './components/BookList';
import Counter from './components/Counter';

import './App.css';

const booksData = [
  { title: 'Harry Poter', description: 'Wizards and Stuff' },
  { title: 'Programming with Js', description: 'Guide to programing' },
  { title: 'The Bible', description: 'Most important book' },
];

function App() {
  return (
    <div className="site-wrapper">
      <Heading text="Our custom library from props"> Our custom library from children</Heading>

      <Counter />
      <BookList books={booksData} />
      <Body />

    </div>
  );
}

export default App;
