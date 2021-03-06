package com.woolution.shop.mapper;

import com.woolution.shop.model.CustMgtModel;
import com.woolution.shop.model.PuppySpeciesModel;
import com.woolution.shop.model.SalesMgtModel;
import com.woolution.shop.model.ServiceMgtCategoryModel;

import java.util.List;

public interface CustMgtMapper {

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

    List<CustMgtModel> analVisitWeek();

    List<CustMgtModel> analVisitWeekLast();

    List<CustMgtModel> analSumPer();

    List<CustMgtModel> analVisitPer();

    List<CustMgtModel> analVisitWeekCnt();

    //end anal
}
