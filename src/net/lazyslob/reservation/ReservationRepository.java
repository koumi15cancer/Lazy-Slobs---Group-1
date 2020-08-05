package net.lazyslob.reservation;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

// Define CRUD Method  with SPRING Data JPA
public interface ReservationRepository extends CrudRepository<Reservation, Long> {
	@Query(value = "SELECT c FROM Reservation c WHERE c.name LIKE '%' || :keyword || '%'"
			+ " OR c.email LIKE '%' || :keyword || '%'"
			+ " OR c.address LIKE '%' || :keyword || '%'")
	public List<Reservation> search(@Param("keyword") String keyword);
}
