package com.LazySlob.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.HashMap;
import java.util.Map;

import com.LazySlob.models.FullSlotTime;
import com.LazySlob.models.Reservation;
import com.LazySlob.service.ReservationService;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.PushBuilder;

// Reservation controller
@CrossOrigin(origins = "http://lazyslobs.ddns.net:8081",maxAge = 20000)
@RestController
@RequestMapping
public class Reservationcontroller {

    @Autowired
    private  ReservationService service;



    // Get all Reservations list
    @GetMapping("/reservations")
	@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<Reservation> listReservation() {
        return service.listAll();
    }

    // Get Reservation by email
    @GetMapping("/reservations/user")
	@PreAuthorize("hasRole('USER')")
    public  List<Reservation> ListByEmail(String email){return service.ListByEmail(email);}

    // Get Unavailable Time
    @GetMapping("/reservations/unvailableBookedTime")
    public List<FullSlotTime> getAvailableTime(@RequestParam String FullDate){
        return service.CheckBookedTime(FullDate);
    }
    // get reservation by id rest api
    @GetMapping("/reservations/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity < Reservation > getReservation(@PathVariable Long id) {
        try {
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }
    //
    // Post new reservation
    @PostMapping("/reservations")
    public void addReservation(@RequestBody  Reservation reservation) {service.save(reservation);
    }
    // Put/ eidt reservation by ID
    @PutMapping("/reservations/{id}")
    @PreAuthorize("hasRole('USER') ")
    public ResponseEntity<Reservation>updateReservation(@PathVariable Long id,@RequestBody Reservation reservation) {
        try {
            Reservation existReservation = service.get(id);

            existReservation.setCustomerName(reservation.getCustomerName());
            existReservation.setEmail(reservation.getEmail());
            existReservation.setQuantity(reservation.getQuantity());
            existReservation.setDescription(reservation.getDescription());
            existReservation.setStatus(reservation.getStatus());

            Reservation updatedReservation = service.save(existReservation);
            return ResponseEntity.ok(updatedReservation);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    //  Delete reservation by ID
    @DeleteMapping("/reservations/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity < Map < String, Boolean >> deleteReservation(@PathVariable Long id)  {
       try{
        Reservation reservation = service.get(id);
        service.delete(id);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }catch (NoSuchElementException e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }
}
