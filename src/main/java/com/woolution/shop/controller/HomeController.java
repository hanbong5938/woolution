package com.woolution.shop.controller;

import com.woolution.shop.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.LocaleResolver;

@Controller
public class HomeController {

    private SampleService sampleService;

    @Autowired
    public void setLocaleResolver(LocaleResolver localeResolver) {
    }

    @Autowired
    public void setSampleService(SampleService sampleService){
        this.sampleService = sampleService;
    }

    @GetMapping("/index")
    public String sample() {
        return "index";
    }

    @GetMapping("/sampleTable")
    public String sampleTable() {
        return "sampleTable";
    }

}
