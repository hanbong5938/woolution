package com.woolution.shop.controller;

import com.woolution.shop.model.CustMgtModel;
import com.woolution.shop.model.ServiceMgtCategoryModel;
import com.woolution.shop.model.ServiceMgtModel;
import com.woolution.shop.service.ServiceMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/service-mgt")
public class ServiceMgtController {

    private ServiceMgtService serviceMgtService;

    @Autowired
    public void setServiceMgtService(ServiceMgtService serviceMgtService) {
        this.serviceMgtService = serviceMgtService;
    }

    @PostMapping(value = "/infoInsert", consumes = "application/json", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoInsert(@RequestBody ServiceMgtModel serviceMgtModel) {
        int count = serviceMgtService.infoInsert(serviceMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoList", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoList() {
        return new ResponseEntity<>(serviceMgtService.infoList(), HttpStatus.OK);
    }

    @PatchMapping(value = "/infoMod", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoMod(@RequestBody ServiceMgtModel serviceMgtModel) {
        int count = serviceMgtService.infoMod(serviceMgtModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PatchMapping(value = "/infoDel", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoDel(@RequestBody int id) {
        int count = serviceMgtService.infoDel(id);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoCategory", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtCategoryModel>> infoCategory() {
        return new ResponseEntity<>(serviceMgtService.infoCategory(), HttpStatus.OK);
    }

    @PostMapping(value = "/infoCategoryAdd", produces = {MediaType.TEXT_PLAIN_VALUE})
    public ResponseEntity<String> infoCategoryAdd(@RequestBody ServiceMgtCategoryModel serviceMgtCategoryModel){
        int count = serviceMgtService.infoCategoryAdd(serviceMgtCategoryModel);
        return count == 1 ? new ResponseEntity<>("success", HttpStatus.OK) : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping(value = "/infoOne/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<List<ServiceMgtModel>> infoOne(@PathVariable int id) {
        return new ResponseEntity<>(serviceMgtService.infoOne(id), HttpStatus.OK);
    }

}
