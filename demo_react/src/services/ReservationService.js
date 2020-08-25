import axios from 'axios'
import authHeader from './auth-header';

const Reservation_API_Basic_Url = "http://localhost:8080/reservations"

class ReservationService{

    getReservation(){
        return axios.get(Reservation_API_Basic_Url,{ headers: authHeader() });
    }

   createReservation(reservation){
        return axios.post(Reservation_API_Basic_Url,{ headers: authHeader() });
    }

    getReservationById(reservationId){
        return axios.get(Reservation_API_Basic_Url + '/' + reservationId ,{ headers: authHeader() });
    }

    updateReservationById(reservation,reservationId){
        return axios.put(Reservation_API_Basic_Url + '/' + reservationId ,{ headers: authHeader() });
    }
}

export  default new ReservationService()