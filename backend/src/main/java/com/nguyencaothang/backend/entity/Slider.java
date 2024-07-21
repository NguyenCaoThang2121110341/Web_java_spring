package com.nguyencaothang.backend.entity;

import java.sql.Timestamp;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
// import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Sliders")

public class Slider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String slider_name;
    @Column(nullable = false)
    private String slider_description;
    @Column(nullable = false, unique = true)
    private String icon;
    @Column(nullable = false, unique = true)

    private String image_path;
    @Column(nullable = false)

    private boolean active;

    public boolean isActive() {
        return this.active;
    }

    public boolean getActive() {
        return this.active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    // @Column(nullable = false)
    private Timestamp created_at;
    @Column(nullable = false)
    private Timestamp updated_at;
    private Long created_by;
    @Column(nullable = false)
    private Long updated_by;

}
