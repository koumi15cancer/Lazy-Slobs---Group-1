package com.LazySlob.repository;


import com.LazySlob.models.BookingTime;
import com.LazySlob.models.FullSlotTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


// Repository for basic script for database
@Repository
public interface BookingTimeRepository extends JpaRepository<BookingTime,Long> {
   @Query(value = "SELECT t.BookedTime AS time FROM booking_time t WHERE t.BookedDate = :BookedDate GROUP BY t.BookedTime HAVING COUNT(t.BookedTime)>=3",nativeQuery = true)
   List<FullSlotTime> CheckBookedTime(@Param("BookedDate") String BookedDate);
}
