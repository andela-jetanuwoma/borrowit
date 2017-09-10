import React from 'react';

const AddForm = (props) => {
  return (
    <div>
      {
        props.showAddButton &&
        <button className="btn btn-primary site-color" onClick={() => props.addNewForm()}>
          <i className="fa fa-plus" />
        </button>
      }
    </div>
  );
}


export default AddForm;
