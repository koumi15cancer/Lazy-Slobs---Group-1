import React, { Component } from 'react';
import ReservationService from '../services/ReservationService'



class CreateReservationsComponents extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        this.saveOrUpdateReservation = this.saveOrUpdateReservation.bind(this);
    }


    saveOrUpdateReservation = (e) => {
        e.preventDefault();
        let reservation = {customerName: this.state.customerName, email: this.state.email, phoneNumber: this.state.phoneNumber, quantity: this.state.phoneNumber,description: this.state.description};
        console.log('reservation => ' + JSON.stringify(reservation));

        ReservationService.createReservation(reservation).then(res =>{
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
            <span id="boxes-container">
                <div class="box" id="time-open-box">
                    <div id="border">
                        <div>
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
                <div class="box" id="form-box">
                    <div style={{position: "relative", top: "30px"}}>
                        <div id="content2">
                            <h1 class="yeseva-one-font" style={{fontSize: "76px"}}>Reservation</h1>
                               <form>
                                    <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Email: </label>
                                            <input placeholder=" Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Phone Number: </label>
                                            <input placeholder="Phone Number" name="phoneNumber" className="form-control" 
                                                value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Quantity: </label>
                                            <input placeholder="Quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateReservation}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                               </form>
                           </div>
                       </div>
                   </div>
            </span>
        );
    }
}

export default CreateReservationsComponents;