import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'


export  class ListReservationsComponents extends Component {
    constructor(props){
        super(props)

        this.state ={
            reservations: []
        }
        this.addReservation = this.addReservation.bind(this);
        this.editReservation = this.editReservation.bind(this);
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
    
    viewEmployee(id){
        this.props.history.push(`/view-reservation/${id}`);
    }

    addReservation(){
        this.props.history.push(`/add-reservation/0`);
    }   

    editReservation(id){
        this.props.history.push(`/add-reservation/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Reservations List</h2>

                <div  row align="left" >
                    <button className = "btn btn-primary  text-center" onClick={this.addReservation}> Add Reservation </button>
                </div>

                <div   className=" row " >
                    <table className = "table table-striped table-bordered text-center">
                    <thead>
                                <tr>
                                    <th> Customer Name</th>
                                    <th> Email</th>
                                    <th> Quantity</th>
                                    <th> Description</th>
                                    <th> Actions</th>
                                </tr> 
                       </thead>
                       <tbody>
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key = {reservation.id}>
                                             <td> { reservation.customerName} </td> 
                                             <td> { reservation.email} </td> 
                                             <td> { reservation.quantity} </td> 
                                             <td> { reservation.description} </td> 
                                             <td>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewReservation(reservation.id)} className="btn btn-info">View </button>
                                             <button style={{marginLeft: "10px"}}onClick ={ () => this.editReservation(reservation.id) } className = "btn btn-info" >Update</button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteReservation(reservation.id)} className="btn btn-danger">Delete </button>
                                             </td>
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