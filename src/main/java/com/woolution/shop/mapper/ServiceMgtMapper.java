package com.woolution.shop.mapper;

import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface ServiceMgtMapper {

    int infoInsert(ServiceMgtModel serviceMgtModel);

    List<ServiceMgtModel> infoList();

    int infoMod(ServiceMgtModel serviceMgtModel);

    int infoDel(int id);
}
