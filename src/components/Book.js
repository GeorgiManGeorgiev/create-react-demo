import React from 'react';

function Book(props) {
  const { title, description } = props;
  return (
    <article>
      <h3>
        {title}
      </h3>
      <p>{description}</p>
    </article>
  );
}

export default Book;
