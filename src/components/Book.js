import React from 'react';

function Book(props) {
  const { title, description, isSelected } = props;

  return (
    <article className={isSelected ? 'selected-book' : ''}>
      <h3>
        {title}
      </h3>
      <p>{description || 'Default Description'}</p>
      <button type="button" onClick={() => console.log(`${title} is clicked!`)}> click</button>
    </article>
  );
}

export default Book;
