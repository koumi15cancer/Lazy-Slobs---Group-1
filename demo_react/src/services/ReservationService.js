import axios from 'axios'


const Reservation_API_Basic_Url = "http://localhost:8080/reservations"

class ReservationService{

    getReservation(){
        return axios.get(Reservation_API_Basic_Url);
    }

   createReservation(reservation){
        return axios.post(Reservation_API_Basic_Url, reservation);
    }

    getReservationById(reservationId){
        return axios.get(Reservation_API_Basic_Url + '/' + reservationId);
    }

    updateReservationById(reservation,reservationId){
        return axios.put(Reservation_API_Basic_Url + '/' + reservationId, reservation);
    }
}

export  default new ReservationService()