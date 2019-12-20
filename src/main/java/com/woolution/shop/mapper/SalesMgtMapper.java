package com.woolution.shop.mapper;

import com.woolution.shop.model.SalesMgtModel;
import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface SalesMgtMapper {

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

    //end anal
}
