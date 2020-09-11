package com.LazySlob.repository;

import java.util.List;

import com.LazySlob.models.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

// Repository for basic script for database
@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
