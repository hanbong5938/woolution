package com.woolution.shop.controller;

import com.woolution.shop.model.CustMgtModel;
import com.woolution.shop.model.PuppySpeciesModel;
import com.woolution.shop.model.SalesMgtModel;
import com.woolution.shop.service.CustMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cust-mgt")
public class CustMgtController {

    private CustMgtService custMgtService;

    @Autowired
    public void setCustMgtService(CustMgtService custMgtService) {
        this.custMgtService = custMgtService;
    }

    //info
    @PostMapping(value = "/infoInsert", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoInsert(@RequestBody CustMgtModel custMgtModel) {
        int count = custMgtService.infoInsert(custMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<CustMgtModel>> infoList() {
        return new ResponseEntity<>(custMgtService.infoList(), HttpStatus.OK);
    }

    @PatchMapping(value = "/infoMod", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoMod(@RequestBody CustMgtModel custMgtModel) {
        int count = custMgtService.infoMod(custMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PatchMapping(value = "/infoDel", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoDel(@RequestBody int id) {
        int count = custMgtService.infoDel(id);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoSpecies", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<PuppySpeciesModel>> infoSpecies() {
        return new ResponseEntity<>(custMgtService.infoSpecies(), HttpStatus.OK);
    }

    @PostMapping(value = "/infoSpeciesAdd", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoSpeciesAdd(@RequestBody PuppySpeciesModel PuppySpeciesModel) {
        int count = custMgtService.infoSpeciesAdd(PuppySpeciesModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoOne/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<CustMgtModel>> infoOne(@PathVariable int id) {
        return new ResponseEntity<>(custMgtService.infoOne(id), HttpStatus.OK);
    }

    @GetMapping(value = "/custHistory/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<SalesMgtModel>> custHistory(@PathVariable int id) {
        System.out.println(custMgtService.custHistory(id));
        return new ResponseEntity<>(custMgtService.custHistory(id), HttpStatus.OK);
    }

    //end info

    //anal
    @GetMapping(value = "/anal-visit-month", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<CustMgtModel>> analVisitMonth() {
        return new ResponseEntity<>(custMgtService.analVisitMonth(), HttpStatus.OK);
    }

    @GetMapping(value = "/anal-visit", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<PuppySpeciesModel>> analVisit() {
        return new ResponseEntity<>(custMgtService.analVisit(), HttpStatus.OK);
    }

    @GetMapping(value = "/anal-visitCnt", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<CustMgtModel>> analVisitCnt() {
        return new ResponseEntity<>(custMgtService.analVisitCnt(), HttpStatus.OK);
    }

    //end anal
}
