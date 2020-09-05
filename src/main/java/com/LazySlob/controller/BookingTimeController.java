package com.LazySlob.controller;


import com.LazySlob.models.BookingTime;
import com.LazySlob.models.FullSlotTime;
import com.LazySlob.models.Reservation;
import com.LazySlob.service.BookingTimeService;
import com.LazySlob.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

// BookingTime controller
@CrossOrigin(origins = "http://localhost:8081",maxAge = 20000)
@RestController
@RequestMapping
public class BookingTimeController {

    @Autowired
    private BookingTimeService service;
    @Autowired
    private ReservationService reservationService;
    //
    // Post Booked time and set their ID
    @PostMapping("/reservations/Date/{id}")
    public void  addReservationDate(@PathVariable Long id,@RequestBody BookingTime bookingTime) {
            Reservation  existReservation = reservationService.get(id);
            existReservation.setTime(bookingTime);
            bookingTime.setReservation(existReservation);
            service.save(bookingTime);
    }

    //  Delete Booked time by ID
    @DeleteMapping("/reservations/Date/{id}")
    public ResponseEntity<Map< String, Boolean >> deleteReservationDate(@PathVariable Long id)  {
        try{
            BookingTime bookingTime = service.get(id);
            service.delete(id);
            Map < String, Boolean > response = new HashMap< >();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get the available time in chosen Day
    @GetMapping("/reservations/Date")
    public List<FullSlotTime> getAvailableTime(@RequestParam String BookedDate){
            return service.CheckBookedTime(BookedDate);
    }
}
