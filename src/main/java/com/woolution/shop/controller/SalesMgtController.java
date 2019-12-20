package com.woolution.shop.controller;

import com.woolution.shop.model.*;
import com.woolution.shop.service.SalesMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sales-mgt")
public class SalesMgtController {

    private SalesMgtService salesMgtService;

    @Autowired
    public void setSalesMgtService(SalesMgtService salesMgtService) {
        this.salesMgtService = salesMgtService;
    }

    //info
    @PostMapping(value = "/infoInsert", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoInsert(@RequestBody SalesMgtModel salesMgtModel) {
        int count = salesMgtService.infoInsert(salesMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesMgtModel>> infoList() {
        return new ResponseEntity<>(salesMgtService.infoList(), HttpStatus.OK);
    }

    @PatchMapping(value = "/infoMod", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoMod(@RequestBody SalesMgtModel salesMgtModel) {
        int count = salesMgtService.infoMod(salesMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PatchMapping(value = "/infoDel", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoDel(@RequestBody int id) {
        int count = salesMgtService.infoDel(id);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoServiceList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoServiceList() {
        return new ResponseEntity<>(salesMgtService.infoServiceList(), HttpStatus.OK);
    }

    @GetMapping(value = "/infoCustList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoServiceListCust() {
        return new ResponseEntity<>(salesMgtService.infoCustList(), HttpStatus.OK);
    }
    //end info

    //anal
    @GetMapping(value = "/anal-sales-month", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesMgtModel>> analSalesMonth() {
        return new ResponseEntity<>(salesMgtService.analSalesMonth(), HttpStatus.OK);
    }

    @GetMapping(value = "/anal-sales-per", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesMgtModel>> analSalesPer() {
        return new ResponseEntity<>(salesMgtService.analSalesPer(), HttpStatus.OK);
    }

    @GetMapping(value = "/anal-sales-rank", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesMgtModel>> analSalesRank() {
        return new ResponseEntity<>(salesMgtService.analSalesRank(), HttpStatus.OK);
    }

    //end anal
}
