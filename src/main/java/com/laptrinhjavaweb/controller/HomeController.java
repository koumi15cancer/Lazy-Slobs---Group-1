package com.laptrinhjavaweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @RequestMapping(value = "/trang-chu", method = RequestMethod.GET)
    public ModelAndView homePage() {
        ModelAndView mav = new ModelAndView("home");
        return mav;
    }

    @RequestMapping(value = "/Lazy_Slobs___Group_1_war", method = RequestMethod.GET)
    public ModelAndView springMVCPage() {
        ModelAndView mav = new ModelAndView("Lazy_Slobs___Group_1_war");
        return mav;
    }
}
