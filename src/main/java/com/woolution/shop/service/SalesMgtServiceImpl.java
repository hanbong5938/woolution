package com.woolution.shop.service;

import com.woolution.shop.mapper.SalesMgtMapper;
import com.woolution.shop.model.SalesMgtModel;
import com.woolution.shop.model.ServiceMgtModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesMgtServiceImpl implements SalesMgtService {

    private SalesMgtMapper salesMgtMapper;

    @Autowired
    public void setSalesMgtMapper(SalesMgtMapper salesMgtMapper) {
        this.salesMgtMapper = salesMgtMapper;
    }

    //info
    @Override
    public int infoInsert(SalesMgtModel salesMgtModel) {
        return salesMgtMapper.infoInsert(salesMgtModel);
    }

    @Override
    public List<SalesMgtModel> infoList() {
        return salesMgtMapper.infoList();
    }

    @Override
    public int infoMod(SalesMgtModel salesMgtModel) {
        return salesMgtMapper.infoMod(salesMgtModel);
    }

    @Override
    public int infoDel(int id) {
        return salesMgtMapper.infoDel(id);
    }

    @Override
    public List<ServiceMgtModel> infoServiceList() {
        return salesMgtMapper.infoServiceList();
    }

    @Override
    public List<ServiceMgtModel> infoCustList() {
        return salesMgtMapper.infoCustList();
    }
    //end info

    //anal
    @Override
    public List<SalesMgtModel> analSalesMonth() {
        return salesMgtMapper.analSalesMonth();
    }

    @Override
    public List<SalesMgtModel> analSalesPer() {
        return salesMgtMapper.analSalesPer();
    }

    @Override
    public List<SalesMgtModel> analSalesRank() {
        return salesMgtMapper.analSalesRank();
    }

    @Override
    public List<SalesMgtModel> analSum() {
        return salesMgtMapper.analSum();
    }

    @Override
    public List<SalesMgtModel> analSumPer() {
        return salesMgtMapper.analSumPer();
    }
    //end anal
}
