package com.LazySlob.repository;


import com.LazySlob.models.BookingTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Repository for basic script for database
@Repository
public interface BookingTimeRepository extends JpaRepository<BookingTime,Long> {
   @Query(value = "SELECT t FROM Booking_Time t WHERE booked_date = :BookedDate GROUP BY booked_time HAVING COUNT(booked_time)>=3",nativeQuery = true)
    Optional<BookingTime> CheckBookedTime(@Param("BookedDate") String BookedDate);
}