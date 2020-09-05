package com.LazySlob.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// BookingTime controller
@CrossOrigin(origins = "http://localhost:8081",maxAge = 20000)
@RestController
@RequestMapping
public class BookingTimeController {
}
