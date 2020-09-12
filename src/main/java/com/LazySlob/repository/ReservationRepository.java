package com.LazySlob.repository;

import com.LazySlob.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// Repository for basic script for database
@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {
  List<Reservation> findByEmail(String email);
}
