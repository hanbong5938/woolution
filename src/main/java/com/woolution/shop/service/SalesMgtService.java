package com.woolution.shop.service;

import com.woolution.shop.model.SalesMgtModel;
import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface SalesMgtService {

    //info

    int infoInsert(SalesMgtModel salesMgtModel);

    List<SalesMgtModel> infoList();

    int infoMod(SalesMgtModel salesMgtModel);

    int infoDel(int id);

    List<ServiceMgtModel> infoServiceList();

    List<ServiceMgtModel> infoCustList();

    //end info

    //anal
    List<SalesMgtModel> analSalesMonth();

    List<SalesMgtModel> analSalesPer();

    List<SalesMgtModel> analSalesRank();

    List<SalesMgtModel> analSum();

    List<SalesMgtModel> analSumPer();

    //end anal
}
