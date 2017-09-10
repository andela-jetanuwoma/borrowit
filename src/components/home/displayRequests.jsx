import React from 'react';
import requestLogo from '../../assets/images/request.svg';
import ReactTooltip from 'react-tooltip'

const displayRequests = (request, index) => {
  return (
    <div className="col-md-4 float-left" key={`request_${index}`}>
      <div className="request-card">
        <img src={requestLogo} className="request-logo" alt={request.fullName} />
        <h5>{request.fullName}</h5>
        <p>{request.slackHandle}</p>
        <span className="item">{request.itemName}</span>
        <div className="request-action row">
          <a className="btn-accept col-sm-6 col-xs-12"><i className="fa fa-check" aria-hidden="true"></i> Accept</a>
          <a className="btn-message col-sm-6 col-xs-12"><i className="fa fa-info" aria-hidden="true"></i><span data-tip={request.description}>Details</span></a>
          <ReactTooltip />
        </div>
      </div>
    </div>
  );
};

export default displayRequests;