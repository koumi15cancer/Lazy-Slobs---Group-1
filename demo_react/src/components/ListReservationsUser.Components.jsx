import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

// List Reservation component
export  class ListReservationsComponents extends Component {
    constructor(props){
        super(props)

        this.state ={
            reservations: [],
            redirect: null,
            userReady: false,
            currentUser: { email: "" }
        }
        this.addReservation = this.addReservation.bind(this);
        this.editReservation = this.editReservation.bind(this);
    
    }
    
    componentDidMount(){ 
        const currentUser = AuthService.getCurrentUser();

       if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true }) 

         /*  ReservationService.getReservation().then((res) => {
            this.setState({ reservations: res.data});
        }); */
     ReservationService.findReservationByEmail(currentUser.email).then((res) => {
            this.setState({ reservations: res.data});
        }); 
    }

    deleteReservation(id){ 
        ReservationService.deleteReservation(id).then( res => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.id !== id)});
        });
    }
    
    viewReservation(id){ 
        this.props.history.push(`/view-reservation/${id}`);
    }

    addReservation(){
        this.props.history.push(`/add-reservation/0`);
    }   

    editReservation(id){
        this.props.history.push(`/add-reservation/${id}`);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
      
     // const { currentUser } = this.state;
       
        return (
            <div>
            {(this.state.userReady) ?
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
                                    <th class="open-sans-condensed-light"> Actions</th>
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
                </div>: null}
            </div>
        );
    }
}

export default ListReservationsComponents;