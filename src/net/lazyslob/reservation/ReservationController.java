package net.lazyslob.reservation;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
//Handle requests from client

@Controller
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;
	
	@RequestMapping("/")
	public ModelAndView home() {
		List<Reservation> listReservation = reservationService.listAll();
		ModelAndView mav = new ModelAndView("index");
		mav.addObject("listReservation", listReservation);
		return mav;
	}
	
	@RequestMapping("/new")
	public String newCustomerForm(Map<String, Object> model) {
	Reservation reservation = new Reservation();
		model.put("reservation", reservation);
		return "new_reservation";
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String saveReservation(@ModelAttribute("reservation") Reservation reservation) {
		reservationService.save(reservation);
		return "redirect:/";
	}
	
	@RequestMapping("/edit")
	public ModelAndView editReservationForm(@RequestParam long id) {
		ModelAndView mav = new ModelAndView("edit_reservation");
		Reservation reservation = reservationService.get(id);
		mav.addObject("reservation", reservation);
		return mav;
	}
	
	@RequestMapping("/delete")
	public String deleteReservationForm(@RequestParam long id) {
		reservationService.delete(id);
		return "redirect:/";		
	}
	
	@RequestMapping("/search")
	public ModelAndView search(@RequestParam String keyword) {
		List<Reservation> result = reservationService.search(keyword);
		ModelAndView mav = new ModelAndView("search");
		mav.addObject("result", result);
		
		return mav;		
	}	
}
