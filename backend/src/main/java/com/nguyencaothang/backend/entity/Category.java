package com.nguyencaothang.backend.entity;


import java.sql.Timestamp;
// import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
//import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String category_name;
    @Column(nullable = false)
    private String category_description;
    @Column(nullable = false, unique = true)
    private String icon;
    @Column(nullable = false, unique = true)
    private String image_path;
    @Column(nullable = false)
    private boolean active;
    @Column(nullable = false)
    private Timestamp create_at;
    @Column(nullable = false)
    private Timestamp update_at;
    private Long create_by;
    @Column(nullable = false)
    private Long update_by;
    //@OneToMany(mappedBy="category")
    //private List < Product > products;

}