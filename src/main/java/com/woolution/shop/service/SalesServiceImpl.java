package com.woolution.shop.service;

import com.woolution.shop.mapper.SalesMapper;
import com.woolution.shop.model.SalesModel;
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
}
