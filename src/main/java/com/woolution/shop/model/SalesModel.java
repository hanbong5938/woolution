package com.woolution.shop.model;

import java.sql.Time;
import java.sql.Timestamp;

public class SalesModel {
    private int id;
    private int sales_price;
    private Timestamp sales_createAT;
    private boolean sales_state;
    private Time sale_time;

    private int service_id;
    private int cust_id;
    private String service_nm;
    private String cust_nm;
}
