package com.LazySlob.controller;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import com.LazySlob.model.Reservation;
import com.LazySlob.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RestAPIcontroller {
    @Autowired
    private  ReservationService service;



    @RequestMapping()
    public String viewHomePage(Model model) {
        List<Reservation> listReservations = service.listAll();
        model.addAttribute("listReservations", listReservations);
        return "index";
    }

    @RequestMapping("/new")
    public String showNewProductPage(Model model) {
        Reservation reservation = new Reservation();
        model.addAttribute("reservation", reservation);
        return "new_reservation";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String saveProduct(@ModelAttribute("reservation") Reservation reservation) {
        service.save(reservation);

        return "redirect:/";
    }

    @RequestMapping("/edit/{id}")
    public ModelAndView showEditProductPage(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit_product");
        Reservation reservation = service.get(id);
        mav.addObject("reservation", reservation);

        return mav;
    }

    @RequestMapping("/delete/{id}")
    public String deleteProduct(@PathVariable(name = "id") int id) {
        service.delete(id);
        return "redirect:/";
    }
}
