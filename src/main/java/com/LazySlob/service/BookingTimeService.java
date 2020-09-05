package com.LazySlob.service;

import java.util.List;
import java.util.Optional;

import com.LazySlob.models.BookingTime;
import com.LazySlob.repository.BookingTimeRepository;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class BookingTimeService {

    @Autowired
    private BookingTimeRepository repo;

    // Find  List of Time not available from date
    public Optional<BookingTime> CheckBookedTime(String BookedDate) {
        return repo.CheckBookedTime(BookedDate);
    }
}
