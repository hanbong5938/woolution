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
    private int cust_sex;
    private Timestamp cust_birthDay;
    private Date cust_creaetAT;
    private boolean cust_state;
    private String cust_parent_nm;
    private String puppy_species_nm;
}
