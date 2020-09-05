import axios from 'axios';
import authHeader from './auth-header';

// Reservation CRUD method
const Reservation_API_Basic_Url = "http://localhost:8080/reservations"

class ReservationService{

    getReservation(){ //Get all Reservations
        return axios.get(Reservation_API_Basic_Url,{ headers: authHeader() });
    }

   createReservation(reservation){ //Post - create reservation
        return axios.post(Reservation_API_Basic_Url, reservation,{ headers: authHeader() });
    }

    getReservationById(reservationId){ // Get reservation by ID
        return axios.get(Reservation_API_Basic_Url + '/' + reservationId,{ headers: authHeader() });
    }

    updateReservationById(reservation, reservationId){ // Put/ Update reservation by ID
        return axios.put(Reservation_API_Basic_Url + '/' + reservationId, reservation,{ headers: authHeader() });
    }

    deleteReservation(reservationId){ // Delete reservation by ID
        return axios.delete(Reservation_API_Basic_Url + '/' + reservationId,{ headers: authHeader() });
    }
}

export  default new ReservationService()