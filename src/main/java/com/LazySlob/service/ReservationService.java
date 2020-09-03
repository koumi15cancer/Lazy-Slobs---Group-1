package com.LazySlob.service;

import java.util.List;

import com.LazySlob.models.Reservation;
import com.LazySlob.repository.ReservationRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReservationService {
    @Autowired
     private ReservationRepository repo;
  // Find all reservations from database
    public List<Reservation> listAll() {
        return repo.findAll();
    }
  // save/ create new reservation
    public Reservation save(Reservation reservation) {
      repo.save(reservation);
        return reservation;
    }
   // get reservation by Id
    public Reservation get(long id) {
        return repo.findById(id).get();
    }
   // delete reservation by Id
    public void delete(long id) {
        repo.deleteById(id);
    }
	
    // return total reservation count from a keyword from date column
	public List<Reservation> getReservationCountFromDate(String keyword) {
		return repo.getReservationCountFromDate(keyword);
	}
	
    // get lists of reservation from a keyword from time column
	public List<Reservation> searchTimeFromDate(String keyword) {
		return repo.searchTimeFromDate(keyword);
	}
}
