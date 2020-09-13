package com.LazySlob.repository;

import com.LazySlob.models.FullSlotTime;
import com.LazySlob.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

// Repository for basic script for database
@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
  List<Reservation> findByEmail(String email);

  @Query(value = "SELECT r.BookingTime  AS time FROM reservation  r GROUP BY BookingTime HAVING COUNT(r.BookingTime)>=3",nativeQuery = true)
  List<FullSlotTime> CheckBookedTime();
}

