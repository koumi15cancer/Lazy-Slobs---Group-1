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
//	@Query(value = "SELECT c FROM Reservation c"
//			+ " WHERE c.customerName LIKE '%' || :keyword || '%'"
//			+ " OR c.date LIKE '%' || :keyword || '%'"
//			+ " OR c.description LIKE '%' || :keyword || '%'"
//			+ " OR c.email LIKE '%' || :keyword || '%'"
//			+ " OR c.quantity LIKE '%' || :keyword || '%'"
//			+ " OR c.time LIKE '%' || :keyword || '%'"
//			+ " OR c.user LIKE '%' || :keyword || '%'")
	@Query(value = "SELECT COUNT(c) FROM Reservation c WHERE c.date LIKE '%' || :keyword || '%'")
	public List<Reservation> getReservationCountFromDate(@Param("keyword") String keyword);

	@Query(value = "SELECT c.time, COUNT(c.time) "
	+ "FROM Reservation c "
	+ "WHERE c.date LIKE '%' || :keyword || '%' "
	+ "GROUP BY time "
	+ "HAVING COUNT(c.time) >= 3")
	public List<Reservation> searchTimeFromDate(@Param("keyword") String keyword);
}
