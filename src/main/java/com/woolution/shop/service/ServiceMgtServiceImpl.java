package com.woolution.shop.service;

import com.woolution.shop.mapper.ServiceMgtMapper;
import com.woolution.shop.model.ServiceMgtCategoryModel;
import com.woolution.shop.model.ServiceMgtModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceMgtServiceImpl implements ServiceMgtService {

    private ServiceMgtMapper serviceMgtMapper;

    @Autowired
    public void setServiceMgtMapper(ServiceMgtMapper serviceMgtMapper) {
        this.serviceMgtMapper = serviceMgtMapper;
    }

    @Override
    public int infoInsert(ServiceMgtModel serviceMgtModel) {
        return serviceMgtMapper.infoInsert(serviceMgtModel);
    }

    @Override
    public List<ServiceMgtModel> infoList() {
        return serviceMgtMapper.infoList();
    }

    @Override
    public int infoMod(ServiceMgtModel serviceMgtModel) {
        return serviceMgtMapper.infoMod(serviceMgtModel);
    }

    @Override
    public int infoDel(int id) {
        return serviceMgtMapper.infoDel(id);
    }

    @Override
    public List<ServiceMgtCategoryModel> infoCategory() {
        return serviceMgtMapper.infoCategory();
    }

    @Override
    public int infoCategoryAdd(ServiceMgtCategoryModel serviceMgtCategoryModel) {
        return serviceMgtMapper.infoCategoryAdd(serviceMgtCategoryModel);
    }


}
