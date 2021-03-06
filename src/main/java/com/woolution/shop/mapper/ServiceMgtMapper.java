package com.woolution.shop.mapper;

import com.woolution.shop.model.BookModel;
import com.woolution.shop.model.ServiceMgtCategoryModel;
import com.woolution.shop.model.ServiceMgtModel;

import java.util.List;

public interface ServiceMgtMapper {

    //info
    int infoInsert(ServiceMgtModel serviceMgtModel);

    List<ServiceMgtModel> infoList();

    int infoMod(ServiceMgtModel serviceMgtModel);

    int infoDel(int id);

    List<ServiceMgtCategoryModel> infoCategory();

    int infoCategoryAdd(ServiceMgtCategoryModel serviceMgtCategoryModel);

    List<ServiceMgtModel> infoOne(int id);
//end info

    //anal

    List<ServiceMgtModel> analServiceMonth();

    List<ServiceMgtModel> analService();

    List<ServiceMgtModel> analServiceCnt();
    //end anal

    //book
    void bookInsert(List<BookModel> bookModelList);

    void bookDel();

    List<BookModel> bookList();

    //end book

    List<ServiceMgtModel> dashboardTable();

}
