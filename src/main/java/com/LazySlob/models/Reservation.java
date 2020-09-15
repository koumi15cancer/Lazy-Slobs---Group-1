package com.LazySlob.models;


import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;
import javax.validation.constraints.Email;
import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;


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

    @Column(name="status")
    public String status = "Pending";


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="reservations_user")
    private User user;

    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="yyyy-MM-dd")
    @Column(name = "BookedDate")
    private Date BookedDate;


    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="HH:mm",timezone= "Asia/Bangkok")
    @Column(name = "BookedTime")
    private Date BookedTime;


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
    public Reservation(String customerName,String email,Integer quantity,String description,String status,Date BookedDate,Date BookedTime) {
        super();
        this.customerName = customerName;
        this.email = email;
        this.quantity = quantity;
        this.description = description;
        this.status = status;
        this.BookedTime = BookedTime;
        this.BookedDate = BookedDate;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) { this.customerName = customerName; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }



    public void setBookedDate(Date bookedDate) {
        BookedDate = bookedDate;
    }



    public void setBookedTime(Date bookedTime) {
        BookedTime = bookedTime;
    }
}
