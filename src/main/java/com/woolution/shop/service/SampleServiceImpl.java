package com.woolution.shop.service;

import com.woolution.shop.mapper.SampleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import com.woolution.shop.model.SampleModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SampleServiceImpl implements SampleService {

    private SampleMapper sampleMapper;

    @Autowired
    public void setSampleMapper(SampleMapper sampleMapper){
        this.sampleMapper = sampleMapper;
    }

    //interface 에서 method 는 항상 public 이기에 오버라이딩시 조상보다 좁은 접근제어자를 사용할 수 없기에 항상 public
    @Override
    public int sampleRegister(SampleModel sampleModel) {
    return sampleMapper.sampleRegister(sampleModel);

    }

    @Override
    public List<SampleModel> sampleList() {
        return sampleMapper.sampleList();
    }

}
