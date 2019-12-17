package com.woolution.shop.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class ServiceMgtModel {
    private int id;
    private String service_desc;
    private String service_nm;
    private int service_price;
    private int service_tet;
    private boolean service_state;
    private Timestamp service_createAT;
    private int admin_id;

    private int service_category_id;
    private String service_category_name;
}
