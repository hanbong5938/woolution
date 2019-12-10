package com.woolution.shop.mapper;
import com.woolution.shop.model.SampleModel;

import java.util.List;

public interface SampleMapper {
    //interface 에서 메서드는 public
    int sampleRegister(SampleModel sampleModel);

    List<SampleModel> sampleList();
}
