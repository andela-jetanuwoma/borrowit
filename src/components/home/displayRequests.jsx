import React from 'react';
import requestLogo from '../../assets/images/request.svg';
import ReactTooltip from 'react-tooltip'

const displayRequests = (props) => (
    <div className="col-md-4 float-left">
      <div className="request-card">
        <img src={requestLogo} className="request-logo" />
        <h5>{props.fullName}</h5>
        <span className="item">{props.itemName}</span>
        <div className="request-action row">
          <a className="btn-accept col-sm-6 col-xs-12" onClick={() => props.acceptRequest(props.request)}><i className="fa fa-check" aria-hidden="true"></i> Accept</a>
          <a className="btn-message col-sm-6 col-xs-12"><i className="fa fa-info" aria-hidden="true"></i><span data-tip={props.description}>Details</span></a>
          <ReactTooltip />
        </div>
      </div>
    </div>
  );

export default displayRequests;