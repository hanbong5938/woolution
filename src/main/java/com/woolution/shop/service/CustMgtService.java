package com.woolution.shop.service;

import com.woolution.shop.model.CustMgtModel;
import com.woolution.shop.model.PuppySpeciesModel;
import com.woolution.shop.model.ServiceMgtCategoryModel;
import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface CustMgtService {

    int infoInsert(CustMgtModel custMgtModel);

    List<CustMgtModel> infoList();

    int infoMod(CustMgtModel custMgtModel);

    int infoDel(int id);

    List<PuppySpeciesModel> infoSpecies();

    int infoSpeciesAdd(PuppySpeciesModel puppySpeciesModel);
}

