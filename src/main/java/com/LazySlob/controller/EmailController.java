package com.LazySlob.controller;

import java.util.NoSuchElementException;

import com.LazySlob.models.Reservation;
import com.LazySlob.service.ReservationService;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LazySlob.models.UserToEmail;
import com.LazySlob.service.EmailService;

// Reservation controller
@CrossOrigin(origins = "http://localhost:8081",maxAge = 20000)
@RestController
@RequestMapping
public class EmailController {
    @Autowired
    private  ReservationService service;

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserToEmail user;

    /**
     *
     * @return
     */
    @GetMapping("/email/{id}/approve")
//	@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Reservation>approveReservation(@PathVariable Long id) {
        try {
            Reservation existReservation = service.get(id);
            // set status to approved
            existReservation.setStatus("Approved");
            // get receiver's email address
            user.setEmailAddress(existReservation.getEmail());
            // save database status column
            Reservation updatedReservation = service.save(existReservation);
            // call send email function to send email
            emailService.sendEmail(user);
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        }
//        catch (MailException mailException) {
//            System.out.println(mailException);
//      }
        catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/email/{id}/decline")
//	@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Reservation>declineReservation(@PathVariable Long id) {
        try {
            Reservation existReservation = service.get(id);
            // set status to approved
            existReservation.setStatus("Declined");
            // get receiver's email address
            user.setEmailAddress(existReservation.getEmail());
            // save database status column
            Reservation updatedReservation = service.save(existReservation);
            // call send email function to send email
            emailService.sendEmail(user);
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        }
//        catch (MailException mailException) {
//            System.out.println(mailException);
//      }
        catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}