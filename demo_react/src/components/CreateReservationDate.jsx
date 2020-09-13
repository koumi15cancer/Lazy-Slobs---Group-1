import React, { Component } from 'react';
import DateService from '../services/DateService'
import DatePicker from 'react-datepicker';
import { addDays, subDays, setHours, setMinutes } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default class ReserveDate extends Component{
    constructor(props){
        super(props)
        this.state = {
            reservation_id: this.props.match.params.id,
            BookedDate: new Date(),
            BookedTime: new Date(),
        }

        this.HandleDateChange = this.HandleDateChange.bind(this);
        this.HandleTimeChange = this.HandleTimeChange.bind(this)
    }

    HandleDateChange= (date)=>{
        this.setState({BookedDate: date})
    }

    HandleTimeChange= (time)=>{
        this.setState({BookedTime: time})
    }

    saveDate = (e) => {
        let bookingTime = {BookedDate: this.state.BookedDate, BookedTime: this.state.BookedTime, reservation_id: this.state.reservation_id};
        console.log('bookingTime => ' + JSON.stringify(bookingTime));
        DateService.createDate(bookingTime, this.state.reservation_id). then(res => this.props.history.push('/reservations'));
    }

    componentDidMountDate(){
        if(this.state.id === '0'){ // if id = 0 , return nothing
            return
        } else { // if id > 0 , return the data from existing reservation
            DateService.getDateById(this.state.reservation_id).then( (res) =>{
                let reserveDate = res.data;
                this.setState({
                    BookedDate: reserveDate.BookedDate,
                    BookedTime: reserveDate.BookedTime
                });
            });
        }
    }


    render(){
        return(
            <span id="boxes-container">
                 <div class="box" id="form-box">  {/*Form Reservation  */}
                    <div style={{position: "relative", top: "30px"}}>
                        <div id="content2">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Date: </label>
                                            <DatePicker
                                                selected={this.state.BookedDate}
                                                onChange={this.HandleDateChange}
                                                maxDate={addDays(this.state.BookedDate, 7)}
                                                minDate={subDays(this.state.BookedDate, 0)}
                                                dateFormat="yyyy-MM-dd"
                                            />
                                        <div className = "form-group">
                                            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Time: </label>
                                            <DatePicker
                                                selected={this.state.BookedTime}
                                                onChange={this.HandleTimeChange}
                                                minTime={setHours(setMinutes(this.state.BookedTime, 0), 7)}
                                                maxTime={setHours(setMinutes(this.state.BookedTime, 0), 22)}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={30}
                                                timeCaption="Time"
                                                dateFormat="HH:mm aa"
                                            />
                                        </div>
                                        <button id ="confirm-button2" onClick={this.saveDate}>Save</button>
                                    </div>
                                </div>
                            </div>
                                    
            </span>
        
        )
    }    

}