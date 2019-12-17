package com.woolution.shop.controller;

import com.woolution.shop.model.*;
import com.woolution.shop.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales-mgt")
public class SalesMgtController {

    private SalesService salesService;

    @Autowired
    public void setSalesService(SalesService salesService) {
        this.salesService = salesService;
    }

    @PostMapping(value = "/infoInsert", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoInsert(@RequestBody SalesModel salesModel) {
        int count = salesService.infoInsert(salesModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesModel>> infoList() {
        return new ResponseEntity<>(salesService.infoList(), HttpStatus.OK);
    }

    @PatchMapping(value = "/infoMod", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoMod(@RequestBody SalesModel salesModel) {
        int count = salesService.infoMod(salesModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PatchMapping(value = "/infoDel", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoDel(@RequestBody int id) {
        int count = salesService.infoDel(id);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoServiceList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoServiceList() {
        return new ResponseEntity<>(salesService.infoServiceList(), HttpStatus.OK);
    }

    @GetMapping(value = "/infoCustList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoServiceListCust() {
        return new ResponseEntity<>(salesService.infoCustList(), HttpStatus.OK);
    }


}
