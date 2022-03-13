import React from 'react';

function Heading(props) {
  const { text, children } = props;
  return (
    <header>
      <h1>
        {text}
      </h1>
      <h2>{children}</h2>
    </header>
  );
}

export default Heading;
