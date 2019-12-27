package com.woolution.shop.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class BookModel {
    private int id;
    private String book_title;
    private boolean book_state;
    private Timestamp book_start;
    private Timestamp book_end;
    private Timestamp book_createAT;
    private int sales_id;
}
