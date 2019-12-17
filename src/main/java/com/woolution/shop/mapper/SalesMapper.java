package com.woolution.shop.mapper;

import com.woolution.shop.model.SalesModel;
import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface SalesMapper {

    int infoInsert(SalesModel salesModel);

    List<SalesModel> infoList();

    int infoMod(SalesModel salesModel);

    int infoDel(int id);

    List<ServiceMgtModel> infoServiceList();

    List<ServiceMgtModel> infoCustList();

}
