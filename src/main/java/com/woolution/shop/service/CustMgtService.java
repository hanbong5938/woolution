package com.woolution.shop.service;

import com.woolution.shop.model.*;

import java.util.List;

public interface CustMgtService {

    //info
    int infoInsert(CustMgtModel custMgtModel);

    List<CustMgtModel> infoList();

    int infoMod(CustMgtModel custMgtModel);

    int infoDel(int id);

    List<PuppySpeciesModel> infoSpecies();

    int infoSpeciesAdd(PuppySpeciesModel puppySpeciesModel);

    List<CustMgtModel> infoOne(int id);

    List <SalesMgtModel> custHistory(int id);

    //end info

    //anal
    List<CustMgtModel> analVisitMonth();

    List<PuppySpeciesModel> analVisit();

    List<CustMgtModel> analVisitCnt();
    //end anal
}

