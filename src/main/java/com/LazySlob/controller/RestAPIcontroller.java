package com.LazySlob.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.HashMap;
import java.util.Map;

import com.LazySlob.models.Reservation;
import com.LazySlob.service.ReservationService;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping
public class RestAPIcontroller {

    @Autowired
    private  ReservationService service;


    @GetMapping("/reservations")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Reservation> listReservation() {
        return service.listAll();
    }

    // get employee by id rest api
    @GetMapping("/reservations/{id}")
    @PreAuthorize("hasRole('ADMIN')or hasRole('USER')")
    public ResponseEntity < Reservation > getReservation(@PathVariable Long id) {
        try {
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/reservations")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public void addReservation(   Reservation reservation) {
        service.save(reservation);
    }

    @PutMapping("/reservations/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('MODERATOR')")
    public ResponseEntity<Reservation>updateReservation(@PathVariable Long id,@RequestBody Reservation reservation) {
        try {
            Reservation existReservation = service.get(id);

            existReservation.setQuantity(reservation.getQuantity());
            existReservation.setDescription(reservation.getDescription());

            Reservation updatedReservation = service.save(existReservation);
            return ResponseEntity.ok(updatedReservation);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/reservation/{id}")
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
