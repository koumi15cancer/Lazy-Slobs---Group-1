package com.LazySlob.models;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity(name = "BookingTime")
@Table(name = "BookingTime")
public class BookingTime {

    @Id
    public long id;


  @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="yyyy-MM-dd")
    private LocalDate BookedDate;

   @JsonFormat(shape = JsonFormat.Shape.STRING,pattern="HH:mm")
    private LocalTime BookedTime;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private Reservation reservation;

    public BookingTime(){};

    public BookingTime(LocalDate bookedDate, LocalTime bookedTime) {
        BookedDate = bookedDate;
        BookedTime = bookedTime;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getBookedDate() {
        return BookedDate;
    }

    public void setBookedDate(LocalDate bookedDate) {
        BookedDate = bookedDate;
    }

    public LocalTime getBookedTime() {
        return BookedTime;
    }

    public void setBookedTime(LocalTime bookedTime) {
        BookedTime = bookedTime;
    }
}
