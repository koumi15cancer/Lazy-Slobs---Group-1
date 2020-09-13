import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'


// Create Reservation Page
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
        if(this.state.id === '0'){ // if id = 0 , return nothing
            return
        } else { // if id > 0 , return the data from existing reservation
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
        if(this.state.id === '0'){ // Return create reservation - Post
            ReservationService.createReservation(reservation).then(res =>{
                this.props.history.push('/reservations');  
            });
        }else{ // Return edit reservation - Put
            ReservationService.updateReservationById(reservation, this.state.id).then( res => {
                this.props.history.push('/reservations');
            });
        }

    }

    // set value
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
   // return home page
    cancel(){
        this.props.history.push('/home');
    }

    getTitle(){ // Change title depend on id Url
        if(this.state.id === '0'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <span id="boxes-container">
                <div class="box" id="time-open-box">
                    <div id="border">
                        <div>  {/*Form decoration */}
                            <h1 class="yeseva-one-font" style={{fontSize: "76px"}}>Time Open</h1>
                            <h1 class="yeseva-one-font info-box-day">Weekday</h1>
                            <h1 class="open-sans-condensed-light">7am-11am(Breakfast)</h1>
                            <h1 class="open-sans-condensed-light">11am-12am(Lunch)</h1>
                            <h1 class="open-sans-condensed-light">12am-10pm(Dinner)</h1>
                            {"\n"}{"\n"}{"\n"} 
                            <h1 class="yeseva-one-font info-box-day">Weekend</h1>
                            <h1 class="open-sans-condensed-light">7am-12am(Breakfast-Lunch)</h1>
                            <h1 class="open-sans-condensed-light">12am-10pm(Dinner)</h1>
                        </div>
                    </div>
                </div>
                <div class="box" id="form-box">  {/*Form Reservation  */}
                    <div style={{position: "relative", top: "30px"}}>
                        <div id="content2">
                            <h1 class="yeseva-one-font" style={{fontSize: "76px"}}>Reservation</h1>
                               <form>
                                    <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Email: </label>
                                            <input placeholder=" Email" name="email" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Description: </label>
                                            <input placeholder="Description" name="description" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <button id ="confirm-button2" onClick={this.saveOrUpdateReservation}>Save</button>
                                        <button id ="confirm-button2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               </form>
                           </div>
                       </div>
                   </div>
            </span>
        );
    }
}


export default CreateReservationsComponents;