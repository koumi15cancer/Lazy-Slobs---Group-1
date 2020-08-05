package net.lazyslob.reservation;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReservationService {
    @Autowired ReservationRepository repo;
	
	public void save(Reservation reservation) {
		repo.save(reservation);
	}
	
	public List<Reservation> listAll() {
		return (List<Reservation>) repo.findAll();
	}
	
	public Reservation get(Long id) {
		return repo.findById(id).get();
	}
	
	public void delete(Long id) {
		repo.deleteById(id);
	}
	
	public List<Reservation> search(String keyword) {
		return repo.search(keyword);
	}
}
