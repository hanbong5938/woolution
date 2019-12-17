package com.woolution.shop.model;

import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
public class CustMgtModel {
    private int id;
    private String cust_nm;
    private int cust_no;
    private String cust_address;
    private String cust_sex;
    private String cust_birthDay;
    private String cust_comment;
    private Timestamp cust_createAT;
    private boolean cust_state;
    private String cust_parent_nm;
    private int puppy_species_id;
    private String puppy_species_nm;
}
