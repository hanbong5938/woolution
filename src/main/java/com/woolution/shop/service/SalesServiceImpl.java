package com.woolution.shop.service;

import com.woolution.shop.mapper.SalesMapper;
import com.woolution.shop.model.SalesModel;
import com.woolution.shop.model.ServiceMgtModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    private SalesMapper salesMapper;

    @Autowired
    public void setSalesMapper(SalesMapper salesMapper) {
        this.salesMapper = salesMapper;
    }

    @Override
    public int infoInsert(SalesModel salesModel) {
        return salesMapper.infoInsert(salesModel);
    }

    @Override
    public List<SalesModel> infoList() {
        return salesMapper.infoList();
    }

    @Override
    public int infoMod(SalesModel salesModel) {
        return salesMapper.infoMod(salesModel);
    }

    @Override
    public int infoDel(int id) {
        return salesMapper.infoDel(id);
    }

    @Override
    public List<ServiceMgtModel> infoServiceList() {
        return salesMapper.infoServiceList();
    }

    @Override
    public List<ServiceMgtModel> infoCustList() {
        return salesMapper.infoCustList();
    }
}
