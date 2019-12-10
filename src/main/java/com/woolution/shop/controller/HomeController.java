package com.woolution.shop.controller;

import com.woolution.shop.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.LocaleResolver;

@Controller
public class HomeController {

    @GetMapping("/index")
    public String sample() {
        return "index";
    }

}
