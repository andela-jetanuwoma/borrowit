import React from 'react';

const DisplayRequest = (item, index) => {
  return (
    <div key={index} className="col-md-3 new-request-item" >
      <h4>{ item.name }</h4>
      <p>{ item.description }</p>
    </div>
  );
};

export default DisplayRequest;
