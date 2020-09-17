import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'
import ApproveService from '../services/approve.service'
import ApproveButton from'./ApproveButton.Component'

// List Reservation component
export  class ListReservationsComponents extends Component {
    constructor(props){
        super(props)
        this.state ={
            reservations: []
        }
        this.addReservation = this.addReservation.bind(this);
        
    }
    
    componentDidMount(){ 
        ReservationService.getReservation().then((res) => {
            this.setState({ reservations: res.data});
        });
    }

    deleteReservation(id){ 
        ReservationService.deleteReservation(id).then( res => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.id !== id)});
        });
    }

    approveReservation(id){
        ApproveService.Approve(id).then( res => {this.props.history.push('/reservations')});
    }

    declineReservation(id){
        ApproveService.Decline(id).then( res => {this.props.history.push('/reservations')});
    }


    viewReservation(id){ 
        this.props.history.push(`/view-reservation/${id}`);
    }

    addReservation(){
        this.props.history.push(`/add-reservation/0`);
    }   



    render() {
        return (
            <div>
                <h2 class="yeseva-one-font" style={{fontSize: "76px"}}>Reservations List</h2>

                <div  row align="left" > {/*Button call Post method*/}
                    <button id ="add-button" onClick={this.addReservation}> Add Reservation </button>
                </div>

                <div   className=" row " >
                    <table className = "table table-striped table-bordered text-center">
                    <thead>
                                <tr>
                                    <th class="open-sans-condensed-light"> Customer Name</th>
                                    <th class="open-sans-condensed-light"> Email</th>
                                    <th class="open-sans-condensed-light"> Quantity</th>
                                    <th class="open-sans-condensed-light"> Description</th>
                                    <th class="open-sans-condensed-light"> Status</th>
                                    <th class="open-sans-condensed-light"> Actions</th>
                                    <th class="open-sans-condensed-light"> Admin</th>
                                </tr> 
                       </thead>
                       <tbody>{/*Get all Reservations */}
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key = {reservation.id}>
                                             <td> { reservation.customerName} </td> 
                                             <td> { reservation.email} </td> 
                                             <td> { reservation.quantity} </td> 
                                             <td> { reservation.description} </td> 
                                             <td> { reservation.status} </td> 
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewReservation(reservation.id)} className="btn btn-info">View </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteReservation(reservation.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                             <td><button style={{marginLeft: "10px"}} onClick={ () => this.approveReservation(reservation.id)} className="btn btn-info">Approve</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.declineReservation(reservation.id)} className="btn btn-danger">Deny</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>


                    </table>


                </div>
            </div>
        );
    }
}

export default ListReservationsComponents;