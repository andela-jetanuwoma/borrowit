import React from 'react';

const DisplayRequest = (item, index) => {
  return (
    <div key={index}>
      <h4>{ item.item }</h4>
      <p>{ item.description }</p>
    </div>
  );
};

export default DisplayRequest;
