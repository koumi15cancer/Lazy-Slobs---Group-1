import axios from 'axios';
import authHeader from './AuthHeader.service';

// Reservation CRUD method
const Approve_API_Basic_Url = "http://lazyslobs.ddns.net:8080/email"

class ApproveService {

    Approve(reservationId) { //Get all Reservations
        return axios.get(Approve_API_Basic_Url + '/' + reservationId + '/approve', { headers: authHeader() });
    }

    Decline(reservationId) { //Get - create reservation
        return axios.get(Approve_API_Basic_Url + '/' + reservationId + '/decline', { headers: authHeader() });
    }
}

export default new ApproveService()
