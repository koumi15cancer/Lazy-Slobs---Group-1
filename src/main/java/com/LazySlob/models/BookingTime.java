package com.LazySlob.models;


import com.fasterxml.jackson.annotation.JsonFormat;


import javax.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Date;


@Entity(name = "BookingTime")
@Table(name = "Booking_Time")
public class BookingTime {

    @Id
    public long id;


    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "BookedDate")
    private Date BookedDate;


    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH-mm")
    @Column(name = "BookedTime")
    private Date BookedTime;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private Reservation reservation;

    public BookingTime(){}


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getBookedDate() { return BookedDate; }

    public void setBookedDate(Date BookedDate) {
        this.BookedDate = BookedDate;
    }

    public Date  getBookedTime() { return BookedTime; }

    public void setBookedTime(Date BookedTime) {
        this.BookedTime = BookedTime;
    }


    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
