package com.nguyencaothang.backend.entity;

import java.sql.Timestamp;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String product_name;
    @Column(nullable = false)
    private String SKU;
    @Column(nullable = false)
    private double regular_price;
    @Column(nullable = false)
    private double discount_price;
    @Column(nullable = false)
    private double quantity;
    @Column(nullable = false, unique = true)
    private String image_path;
    @Column(nullable = false)
    private String short_description;
    @Column(nullable = false)
    private String product_description;
    @Column(nullable = false)
    private double product_weight;
    @Column(nullable = false)
    private double product_note;
    @Column(nullable = false)
    private boolean published;
    @Column(nullable = false)
    private int show_home;
    @Column(nullable = false)
    private Timestamp created_at;
    @Column(nullable = false)
    private Timestamp updated_at;
    private Long created_by;
    @Column(nullable = false)
    private Long updated_by;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
}