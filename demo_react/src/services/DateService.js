import axios from 'axios';
import authHeader from './auth-header';

// Date method
const Date_API_Basic_Url = "http://localhost:8080/reservations/Date"

class DateService {


    getDate() { //Get all Date
        return axios.get(Date_API_Basic_Url, { headers: authHeader() });
    }

    createDate(date, dateId) { //Post - create date
        return axios.post(Date_API_Basic_Url + '/' + dateId, date, { headers: authHeader() });
    }

    getDateById(dateId) { // Get date by ID
        return axios.get(Date_API_Basic_Url + '/' + dateId, { headers: authHeader() });
    }

    updateDateById(date, dateId) { // Put/ Update date by ID
        return axios.put(Date_API_Basic_Url + '/' + dateId, date, { headers: authHeader() });
    }

    deleteDateId(dateId) { // Delete date by ID
        return axios.delete(Date_API_Basic_Url + '/' + dateId, { headers: authHeader() });
    }
}

export default new DateService()