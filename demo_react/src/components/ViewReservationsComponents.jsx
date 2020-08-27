import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'

class ViewReservationsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            reservation: {}
        }
    }

    componentDidMount(){
        ReservationService.getReservationById(this.state.id).then( res => {
            this.setState({reservation: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Reservation Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer Name: </label>
                            <div> { this.state.reservation.customerName }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.reservation.email }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.reservation.quantity}</div>
                        </div>
                        <div className = "row">
                            <label> Description: </label>
                            <div> { this.state.reservation.description}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default ViewReservationsComponents;