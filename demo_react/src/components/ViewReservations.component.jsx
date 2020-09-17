import React, { Component } from 'react';
import ReservationService from '../services/Reservation.service'
//View detailed reservation
class ViewReservationsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            reservation: {}
        }
    }
//Get Reservation by Id
    componentDidMount(){
        ReservationService.getReservationById(this.state.id).then( res => {
            this.setState({reservation: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div class="reservation-info-box">
                    <h3 className = "yeseva-one-font-info" style={{fontSize: "40px"}}> View Reservation Details</h3>
                    <div className = "card-body">
                    <div className = "card-title">
                        <label class="yeseva-one-font-info" style={{fontSize: "20px"}}> customer Name: </label>
                            <div style={{fontSize: "20px"}}> { this.state.reservation.customerName }</div>
                        </div>
                        <div className = "card-title">
                        <label class="yeseva-one-font-info" style={{fontSize: "20px"}}> Email: </label>
                        <div style={{fontSize: "20px"}}> { this.state.reservation.email }</div>
                        </div>
                        <div className = "card-title">
                        <label class="yeseva-one-font-info" style={{fontSize: "20px"}}> Quantity: </label>
                        <div style={{fontSize: "20px"}}> { this.state.reservation.quantity}</div>
                        </div>
                        <div className = "card-title">
                        <label class="yeseva-one-font-info" style={{fontSize: "20px"}}> Description: </label>
                        <div style={{fontSize: "20px"}}> { this.state.reservation.description}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default ViewReservationsComponents;