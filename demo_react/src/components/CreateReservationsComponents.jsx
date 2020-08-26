import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'



class CreateReservationsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {

            id: this.props.match.params.id,
            customerName: '',
            email: '',
            quantity:'',
            description: '',
        }

        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeQuantityHandler= this.changeQuantityHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateReservation = this.saveOrUpdateReservation.bind(this);
    }


    componentDidMount(){
        if(this.state.id === '0'){
            return
        } else {
            ReservationService.getReservationById(this.state.id).then( (res) =>{
                let reservation = res.data;
                this.setState({
                    customerName: reservation.customerName,
                    email: reservation.email,
                    quantity: reservation.quantity,
                    description: reservation.description
                });
            });
        }
    }


    saveOrUpdateReservation = (e) => {
        e.preventDefault();
        let reservation = {customerName: this.state.customerName, email: this.state.email, quantity: this.state.quantity,description: this.state.description};
        console.log('reservation => ' + JSON.stringify(reservation));

        if(this.state.id === '0'){
            ReservationService.createReservation(reservation).then(res =>{
                this.props.history.push('/reservations');
            });
        }else{
            ReservationService.updateReservationById(reservation, this.state.id).then( res => {
                this.props.history.push('/reservations');
            });
        }

    }



    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
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


    getTitle(){
        if(this.state.id === '0'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <div className ="container"></div>
                <div className ="row">
                    <div className = "card col-md-4 offset-md-4 offset-md-4">
                        {
                            this.getTitle()
                        }
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
                                    <label> Quantity: </label>
                                    <input placeholder="Quantity" name="quantity" className="form-control"
                                           value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Description: </label>
                                    <input placeholder="Description" name="description" className="form-control"
                                           value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateReservation}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateReservationsComponents;