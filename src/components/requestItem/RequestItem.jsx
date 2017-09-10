import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddForm from './AddForm';
import RequestForm from './RequestForm';
import DisplayRequest from './DisplayRequest';
import { sendBorrowRequest } from '../../actions/requestActions';
import '../../assets/styles/requestModal.css';

class RequestItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.isAuthenticated,
      isLoading: false,
      showAddButton: true,
      items: [],
      itemTitle: '',
      itemDescription: '',
    };
    
    this.addNewForm = this.addNewForm.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  addNewForm() {
    return this.setState({
      showAddButton: false
    }, () => {
      return '';
    });
  }

  saveItem() {
    this.setState({
      items: [...this.state.items, {
        item: this.state.itemTitle,
        description: this.state.itemDescription
      }],
      showAddButton: true,
    }, () => {
      // Alert to user success in saving
      return '';
    });

  }
  
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  sendRequest() {
    this.state.items.map((item) => {
      this.props.sendBorrowRequest(item);
    });

    this.setState({ items: [] });
  }

  render() {
    return (
      <div className="row main-page">
        <button type="button" className="btn btn-primary request-modal-button" data-toggle="modal" data-target="#request-item-modal">
          <i className="fa fa-plus"/>
        </button>

        <div className="col">
          <div className="modal fade col-md-12" id="request-item-modal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add items</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  
                  <AddForm addNewForm={this.addNewForm} showAddButton={this.state.showAddButton}  />
                  { !this.state.showAddButton &&  <RequestForm onChange={this.onChange} saveItem={this.saveItem} /> }

                  { this.state.items.length > 0 && this.state.items.map(DisplayRequest) }
                
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={() => this.sendRequest()}>Send Request</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

RequestItem.contextTypes = {
  router: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  notifications: state.notifications,
});


export default connect(mapStateToProps, { sendBorrowRequest })(RequestItem);