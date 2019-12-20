package com.woolution.shop.service;

import com.woolution.shop.mapper.CustMgtMapper;
import com.woolution.shop.model.CustMgtModel;
import com.woolution.shop.model.PuppySpeciesModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustMgtServiceImpl implements CustMgtService {

    private CustMgtMapper custMgtMapper;

    @Autowired
    public void setCustMgtMapper(CustMgtMapper custMgtMapper) {
        this.custMgtMapper = custMgtMapper;
    }

    //info

    @Override
    public int infoInsert(CustMgtModel custMgtModel) {
        return custMgtMapper.infoInsert(custMgtModel);
    }

    @Override
    public List<CustMgtModel> infoList() {
        return custMgtMapper.infoList();
    }

    @Override
    public int infoMod(CustMgtModel custMgtModel) {
        return custMgtMapper.infoMod(custMgtModel);
    }

    @Override
    public int infoDel(int id) {
        return custMgtMapper.infoDel(id);
    }

    @Override
    public List<PuppySpeciesModel> infoSpecies() {
        return custMgtMapper.infoSpecies();
    }

    @Override
    public int infoSpeciesAdd(PuppySpeciesModel puppySpeciesModel) {
        return custMgtMapper.infoSpeciesAdd(puppySpeciesModel);
    }

    @Override
    public List<CustMgtModel> infoOne(int id) {
        return custMgtMapper.infoOne(id);
    }

    //end info

    //anal

    @Override
    public List<CustMgtModel> analVisitMonth() {
        return custMgtMapper.analVisitMonth();
    }

    @Override
    public List<PuppySpeciesModel> analVisit() {
        return custMgtMapper.analVisit();
    }

    @Override
    public List<CustMgtModel> analVisitCnt() {
        return custMgtMapper.analVisitCnt();
    }

    //end anal

}
