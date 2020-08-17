package com.LazySlob.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.CopyOnWriteArrayList;

import com.LazySlob.model.Reservation;
import com.LazySlob.service.ReservationService;
import com.LazySlob.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;


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
}
