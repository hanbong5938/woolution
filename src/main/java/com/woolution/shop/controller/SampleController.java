package com.woolution.shop.controller;

import com.woolution.shop.model.SampleModel;
import com.woolution.shop.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.LocaleResolver;

import java.util.List;

@RestController
public class SampleController {

    private SampleService sampleService;

    @Autowired
    public void setLocaleResolver(LocaleResolver localeResolver) {
    }

    @Autowired
    public void setSampleService(SampleService sampleService){
        this.sampleService = sampleService;
    }

    @PostMapping(value = "/sampleRegister", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> sampleRegister(@RequestBody SampleModel sampleModel) {
        int count = sampleService.sampleRegister(sampleModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK): new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/sampleList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SampleModel>> sampleList(Model model){
        return new ResponseEntity<>(sampleService.sampleList(), HttpStatus.OK);
    }

    @PostMapping(value = "/sampleList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SampleModel>> sampleList(){
        return new ResponseEntity<>(sampleService.sampleList(), HttpStatus.OK);
    }
}



