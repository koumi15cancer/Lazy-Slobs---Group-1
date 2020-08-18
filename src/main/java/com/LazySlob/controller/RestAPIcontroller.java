package com.LazySlob.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.CopyOnWriteArrayList;

import com.LazySlob.model.Reservation;
import com.LazySlob.service.ReservationService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class RestAPIcontroller {

    @Autowired
    private  ReservationService service;


    @GetMapping("/reservations")
    public List<Reservation> list() {
        return service.listAll();
    }

    // get employee by id rest api
    @GetMapping("/reservations/{id}")
    public ResponseEntity < Reservation > get(@PathVariable Long id) {
        try {
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/reservations")
    public void add(@RequestBody Reservation reservation) {
        service.save(reservation);
    }

    @PutMapping("/reservations/{id}")
    public ResponseEntity<?> update(@RequestBody Reservation reservation, @PathVariable Integer id) {
        try {
            Reservation existProduct = service.get(id);
            service.save(reservation);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/reservation/{id}")
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
