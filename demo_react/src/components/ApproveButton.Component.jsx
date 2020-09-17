import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'
import ApproveService from '../services/approve.service'

class ApproveButton extends Component {
    constructor(props) {
      super(props);
      this.approveReservation = this.approveReservation.bind(this);
      this.declineReservation = this.declineReservation.bind(this);
      this.state = {id: '', pending: true};
    }
  
    approveReservation(id){
        ApproveService.Approve(id).then( res => {this.props.history.push('/reservations')});
    }

    declineReservation(id){
        ApproveService.Decline(id).then( res => {this.props.history.push('/reservations')});
    }

    checkStatus(id){
        const reservation = ReservationService.getReservationById(id);
        if (reservation.status !== "Pending" ){
            return false;
        }
    }

    render() {
      const pending = this.state.pending;
      let content;
      if (pending) {
        content =  
        <div>
            <button style={{marginLeft: "10px"}} onClick={ () => this.approveReservation(this.state.id)} className="btn btn-info">Approve</button>
            <button style={{marginLeft: "10px"}} onClick={ () => this.declineReservation(this.state.id)} className="btn btn-danger">Deny</button>
        </div>;
      } 
      else { 
        content = <div></div>;
      }

      return (
        <div>
          {content}
        </div>
      );
    }
  }

export default ApproveButton;