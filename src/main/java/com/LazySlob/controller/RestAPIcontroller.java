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


import javax.mail.MessagingException;

import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LazySlob.models.UserToEmail;
import com.LazySlob.service.EmailService;

// Reservation controller
@CrossOrigin(origins = "http://localhost:8081",maxAge = 20000)
@RestController
@RequestMapping
public class RestAPIcontroller {

    @Autowired
    private  ReservationService service;
    
	@Autowired
	private EmailService notificationService;

	@Autowired
	private UserToEmail user;

    // Get all Reservations list
    @GetMapping("/reservations")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    
    public List<Reservation> listReservation() {
        return service.listAll();
    }

    // get reservation by id rest api
    @GetMapping("/reservations/{id}")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity < Reservation > getReservation(@PathVariable Long id) {
        try {
            Reservation reservation= service.get(id);
            return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Reservation>(HttpStatus.NOT_FOUND);
        }
    }
    
    // Add new reservation
    @PostMapping("/reservations")
    public void addReservation(@RequestBody  Reservation reservation) {
    	service.save(reservation);
    }
    
    // Edit reservation by ID
    @PutMapping("/reservations/{id}")
//    @PreAuthorize("hasRole('USER') ")
    public ResponseEntity<Reservation>updateReservation(@PathVariable Long id,@RequestBody Reservation reservation) {
        try {
            Reservation existReservation = service.get(id);

            existReservation.setCustomerName(reservation.getCustomerName());
            existReservation.setEmail(reservation.getEmail());
            existReservation.setQuantity(reservation.getQuantity());
            existReservation.setDescription(reservation.getDescription());

            Reservation updatedReservation = service.save(existReservation);
            return ResponseEntity.ok(updatedReservation);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    //  Delete reservation by ID
    @DeleteMapping("/reservations/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity < Map < String, Boolean >> deleteReservation(@PathVariable Long id)  {
       try {
        Reservation reservation = service.get(id);
        service.delete(id);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    } catch (NoSuchElementException e){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
    }
    

	/////////////////
	// Email stuff //
	/////////////////
	/**
	 * 
	 * @return
	 */
	@RequestMapping("send-mail")
	public String send() {

		/*
		 * Creating a User with the help of EmailToUser class that we have declared and setting
		 * Email address of the sender.
		 */
		user.setEmailAddress("");  //Receiver's email address
		/*
		 * Here we will call sendEmail() for Sending mail to the sender.
		 */
		try {
			notificationService.sendEmail(user);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}

	/**
	 * 
	 * @return
	 * @throws MessagingException
	 */
	@RequestMapping("send-mail-attachment")
	public String sendWithAttachment() throws MessagingException {

		/*
		 * Creating a User with the help of EmailToUser class that we have declared and setting
		 * Email address of the sender.
		 */
		user.setEmailAddress(""); //Receiver's email address

		/*
		 * Here we will call sendEmailWithAttachment() for Sending mail to the sender
		 * that contains a attachment.
		 */
		try {
			notificationService.sendEmailWithAttachment(user);
		} catch (MailException mailException) {
			System.out.println(mailException);
		}
		return "Congratulations! Your mail has been send to the user.";
	}
	////////////////////////
	// End of email stuff //
	////////////////////////
}
