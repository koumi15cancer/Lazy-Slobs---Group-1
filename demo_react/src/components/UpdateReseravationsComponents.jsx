import React, { Component } from 'react';
import ReservationService from '../services/ReservationService';

class UpdateReseravationsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customerName: '',
            email: '',
            phoneNumber: '',
            quantity:'',
            description:''
        }
     
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeQuantityHandler= this.changeQuantityHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.UpdateReservation = this.UpdateReservation.bind(this);
    }

    componentDidMount(){
        ReservationService.getReservationById(this.state.id).then((res) =>{
            let reservation = res.data;
            this.setState({customerName: reservation.customerName,
            email: reservation.email,
            phoneNumber: reservation.phoneNumber,
            quantity: reservation.quantity,
            description: reservation.description
            })
        });
    }

    UpdateReservation = (e) => {
        e.preventDefault();
        let reservation = {customerName: this.state.customerName, email: this.state.email, phoneNumber: this.state.phoneNumber, quantity: this.state.phoneNumber,description: this.state.description};
        console.log('reservation => ' + JSON.stringify(reservation));
        ReservationService.UpdateReservationById(reservation,this.state.id).then( res => {
           this.props.history.push('/reservations');
        });
    }
  
    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePhoneNumberHandler= (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeQuantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/reservations');
    }


    render() {
        return (
            <div>
                 <div className ="container"></div>
                   <div className ="row">
                       <div className = "card col-md-4 offset-md-4 offset-md-4">
                           <h3 className ="text-center" >Update Reservation</h3>
                           <div className = "card-body">
                               <form>
                                    <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder=" Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.UpdateReservation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               </form>
                           </div>
                       </div>

                   </div>
            </div>
        );
    }
}

export default UpdateReseravationsComponents;