package com.woolution.shop.model;

import lombok.Data;

import java.security.Timestamp;


@Data
public class StaffMgtModel {

  private int id;
  private String staff_nm;
  private int staff_no;
  private int staff_sal;
  private int staff_Account;
  private Timestamp staff_createAT;
  private Timestamp staff_sack;
  private String staff_comment;
  private boolean staff_state;
  private int admin_id;


}
