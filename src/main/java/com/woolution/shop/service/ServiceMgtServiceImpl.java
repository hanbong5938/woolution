package com.woolution.shop.service;

import com.woolution.shop.mapper.ServiceMgtMapper;
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

}
