import React, { Component } from 'react';
import ReservationService from '../services/Reservation.service'
import DatePicker from 'react-datepicker';
import { addDays, subDays, setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

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
            BookedDate: new Date(),
            BookedTime:  new Date(),
            fullList:[],
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeQuantityHandler= this.changeQuantityHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeBookedDateHandler = this.changeBookedDateHandler.bind(this);
        this.changeBookedTimeHandler = this.changeBookedTimeHandler.bind(this);
        this.saveOrUpdateReservation = this.saveOrUpdateReservation.bind(this);
    }  
    
    componentDidMount(){
        let a = this.state.BookedDate.toLocaleDateString();
        ReservationService.getUnavailableTime(a).then( (res) =>{
        this.setState({fullList : res.data});})
        }
     

    componentDidUpdate(prevProps, prevState){
        let a = this.state.BookedDate.toLocaleDateString();
        if(prevState.BookedDate !== this.state.BookedDate){
            ReservationService.getUnavailableTime(a).then( (res) =>{
                this.setState({fullList : res.data});})
        }
    }    

    // Save method
    saveOrUpdateReservation = (e) => {
        e.preventDefault();
        let reservation = {customerName: this.state.customerName, email: this.state.email, quantity: this.state.quantity,description: this.state.description, BookedDate: this.state.BookedDate.toLocaleDateString(), BookedTime: this.state.BookedTime.toLocaleTimeString()};
        console.log('reservation => ' + JSON.stringify(reservation));
        ReservationService.createReservation(reservation).then(res =>{
            this.props.history.push('/reservations');
        });
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

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }


    changeBookedDateHandler = date => {
        this.setState({BookedDate: date });
    };

    changeBookedTimeHandler = date => {
        this.setState({BookedTime: date});
    };


   // return home page
    cancel(){
        this.props.history.push('/home');
    }

    //Algorithms to extract excluded time
    //Combine the time from different objects to one array
    combineKeyData(data){
        var output = [], item;
        // iterate the outer array to look at each item in that array
        for (var i = 0; i < data.length; i++) {
            item = data[i];
            // iterate each key on the object
            for (var prop in item) {
                if (item.hasOwnProperty(prop)) {
                    // if this keys doesn't exist in the output object, add it
                    if (!(prop in output)) {
                        output[prop] = [];
                    }
                    // add data onto the end of the key's array
                    output.push(item[prop]);
                }
            }
        }
        return output;
    }
    //get list of date objects, which will be excluded
    getListTime(data){
        var output = [];
        //var array = [];
        for (var i = 0; i < data.length; i++){
            var array = data[i].split(":");
            var h = parseInt(array[0], 10);
            var m = parseInt(array[1], 10);
            if (data[i].substr(-2)==='PM'){
                h = h+12;}
            var ftime =  setHours(setMinutes(new Date(), m), h);
            output.push(ftime)
        }
        return output;
    }
    getListOfUnavailableTime(){
        const alterfullList = this.combineKeyData(this.state.fullList);
        var ListOfBooked = this.getListTime(alterfullList);
        return ListOfBooked;
        
    }

    render() {
        let excludedTime = this.getListOfUnavailableTime();
        console.log(this.state.BookedDate);
        console.log(this.state.fullList);
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
                                        <div className = "form-group">
                                        <label class="yeseva-one-font" style={{fontSize: "24px"}}> Date: </label>
                                        <DatePicker
                                                selected={this.state.BookedDate}
                                                onChange={this.changeBookedDateHandler}
                                                maxDate={addDays(new Date(), 7)}
                                                minDate={subDays(new Date(), 0)}
                                                dateFormat="yyyy-MM-dd"
                                        />
                                        </div>
                                        <div className = "form-group">
                                        <label class="yeseva-one-font" style={{fontSize: "24px"}}> Time: </label>
                                        <DatePicker
                                            selected={this.state.BookedTime}
                                            onChange={this.changeBookedTimeHandler}
                                            minTime={setHours(setMinutes(new Date(), 0), 7)}
                                            maxTime={setHours(setMinutes(new Date(), 0), 22)}
                                            showTimeSelect
                                            showTimeSelectOnly
                                            excludeTimes ={excludedTime}
                                            timeIntervals={30}
                                            dateFormat="HH:mm"
                                        />
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