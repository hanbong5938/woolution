package com.woolution.shop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SidebarController {

    @GetMapping("/sampleTable")
    public String sampleTable() {
        return "sampleTable";
    }


    //--service mgt
    @GetMapping("/service-mgt/info")
    public String serviceMgtInfo() {
        return "serviceMgt/service-mgt-info";
    }

    @GetMapping("/service-mgt/message")
    public String serviceMatMessage() {
        return "service-mgt-message";
    }

    @GetMapping("/service-mgt/coupon")
    public String serviceMgtCoupon() {
        return "service-mgt-coupon";
    }


    @GetMapping("/service-mgt/book")
    public String serviceMgtBook() {
        return "service-mgt-book";
    }

    @GetMapping("/service-mgt/anl")
    public String serviceMgtAnal() {
        return "service-mgt-anal";
    }
    //.--service mgt

}
