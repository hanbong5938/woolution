package com.woolution.shop.model;

import lombok.Data;
import java.sql.Timestamp;

@Data
public class ServiceMgtModel {
    private int id;
    private int service_kind;
    private String service_desc;
    private int service_price;
    private int service_tet;
    private int service_state;
    private Timestamp service_createAT;
    private int admin_id;
}
