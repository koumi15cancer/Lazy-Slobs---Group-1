package com.LazySlob.models;


import javax.persistence.*;
import javax.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

// Reservation class
@Entity
@Table(name = "Reservation")
public class Reservation  {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    public long id;

    @Column(name = "customer_name")
    public String customerName;


    @Column(name = "email_customer")
    @Email
    public  String email;

    @Column(name="quantity")
    public Integer quantity;

    @Column(name="description")
    public String description;

    @Column(name="date")
    @JsonFormat(pattern = "dd-mm-yyyy")
    public String date;

    @Column(name="time")
    @JsonFormat(pattern = "HH:mm")
    public String time;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="reservations_user")
    private User user;

    @Column(name="status")
    public String status;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
       this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Reservation(){};
    // Reservation constructor
    public Reservation(String customerName, String email, Integer quantity, String description, String date, String time, String status) {
        super();
        this.customerName = customerName;
        this.email = email;
        this.quantity = quantity;
        this.description = description;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    public String getCustomerName() {
        return customerName;
    }

    public String getEmail() {
        return email;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public String getDescription() {
        return description;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getStatus() {
        return status;
    }

    public void setCustomerName(String customerName) {
    	this.customerName = customerName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
