package com.LazySlob.models;


import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;
import javax.validation.constraints.Email;
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

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm",timezone = "VST")
    @Column(name = "BookingTime")
    private Date BookingTime;


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
    public Reservation(String customerName,String email,Integer quantity,String description,String status,Date BookingTime) {
        super();
        this.customerName = customerName;
        this.email = email;
        this.quantity = quantity;
        this.description = description;
        this.status = status;
        this.BookingTime = BookingTime;
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

  //  public Date getBookingTime() { return BookingTime; }

    public void setBookingTime(Date bookingTime) {
        BookingTime = bookingTime ;
    }
}
