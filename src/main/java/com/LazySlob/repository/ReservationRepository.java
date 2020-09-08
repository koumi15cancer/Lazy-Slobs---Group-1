package com.LazySlob.repository;

import com.LazySlob.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// Repository for basic script for database
@Repository
public interface ReservationRepository extends JpaRepository<Reservation,Long> {

}
