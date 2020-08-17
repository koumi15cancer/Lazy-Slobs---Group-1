package com.LazySlob.service;

import java.util.List;

import com.LazySlob.model.Reservation;
import com.LazySlob.repository.ReservationRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReservationService {
    @Autowired
     private ReservationRepository repo;

    public List<Reservation> listAll() {
        return repo.findAll();
    }

    public void save(Reservation reservation) {
        repo.save(reservation);
    }

    public Reservation get(long id) {
        return repo.findById(id).get();
    }

    public void delete(long id) {
        repo.deleteById(id);
    }
}
