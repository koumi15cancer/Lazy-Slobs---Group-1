import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays, setHours, setMinutes, getHours, getMinutes, get } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import ReservationService from '../services/ReservationService';

class ConditionalTimePicker extends Component{
    constructor(props){
        super(props)
        this.state = {
            date: '9/18/2020',
            time: '',
            fullList:'',
        }
        this.changetimeHandler = this.changetimeHandler.bind(this);
    }

changetimeHandler = date => {
    this.setState({time: date});
}

componentDidMount(){ 
    ReservationService.getUnavailableTime(this.state.date).then((res) => {
        this.setState({fullList : res.data});
    });
}

combineKeyData(data) {
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

getListTime(data){
    var output = [];
    var array = [];
    for (var i = 0; i < data.length; i++){
        var array = data[i].split(":");
        var h = parseInt(array[0], 10);
        var m = parseInt(array[1], 10);
        if (array[0].substr(-2)=='PM'){
            return h = h+12;
        }
        var ftime =  setHours(setMinutes(new Date(), m), h);
        output.push(ftime)
    }
    return output;
}
getListOfUnavailableTime(date){
    const fullList1 = this.combineKeyData(this.state.fullList);
    console.log(this.state.fullList)
    console.log(fullList1);
    var ListOfBooked = this.getListTime(fullList1);
    console.log(this.state.date);
    console.log(ListOfBooked);
    return ListOfBooked;
}

    render(){
        let excludedTime = this.getListOfUnavailableTime(this.state.date)
        return(
            <div className = "form-group">
            <label class="yeseva-one-font" style={{fontSize: "24px"}}> Time: </label>
            <DatePicker
                selected={this.state.time}
                onChange={this.changetimeHandler}
                minTime={setHours(setMinutes(new Date(), 0), 7)}
                maxTime={setHours(setMinutes(new Date(), 0), 22)}
                showTimeSelect
                showTimeSelectOnly
                excludeTimes ={excludedTime}
                timeIntervals={30}
                dateFormat="HH:mm"
            />
            </div>
        )
    }
}

export default ConditionalTimePicker;
