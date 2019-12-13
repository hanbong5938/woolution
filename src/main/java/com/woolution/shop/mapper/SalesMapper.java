package com.woolution.shop.mapper;

import com.woolution.shop.model.SalesModel;

import java.util.List;

public interface SalesMapper {
    int infoInsert(SalesModel salesModel);

    List<SalesModel> infoList();
}
