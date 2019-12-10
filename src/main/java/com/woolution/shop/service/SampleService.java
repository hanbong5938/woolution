package com.woolution.shop.service;

import com.woolution.shop.model.SampleModel;

import java.util.List;

public interface SampleService {
    int sampleRegister(SampleModel sampleModel);

    List<SampleModel> sampleList();
}
