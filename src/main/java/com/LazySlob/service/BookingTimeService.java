package com.LazySlob.service;

import java.util.List;
import com.LazySlob.models.BookingTime;
import com.LazySlob.models.FullSlotTime;
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
    public List<FullSlotTime> CheckBookedTime(String BookedDate) {
        return repo.CheckBookedTime(BookedDate);
    }

    // save/ create Booking Date
    public BookingTime save(BookingTime bookingTime) {
        repo.save(bookingTime);
        return bookingTime;
    }

    // get Booking Date by Id
    public BookingTime get(long id) {
        return repo.findById(id).get();
    }


    // delete Booking Date by Id
    public void delete(long id) {
        repo.deleteById(id);
    }
}
