import React from 'react';

const RequestForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label>Item</label>
        <input type="text" className="form-control" id="request-form-item" placeholder="Thunderbolt" name="itemTitle" onChange={props.onChange} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea className="form-control" id="request-form-description" rows="3" name="itemDescription" onChange={props.onChange}/>
      </div>

      <button type="button" className="btn btn-primary" onClick={props.saveItem}>Save Item</button>
    </form>
  );
}


export default RequestForm;
