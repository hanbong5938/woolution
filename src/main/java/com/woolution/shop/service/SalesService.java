package com.woolution.shop.service;

import com.woolution.shop.model.SalesModel;

import java.util.List;

public interface SalesService {

    int infoInsert(SalesModel salesModel);

    List<SalesModel> infoList();
}
