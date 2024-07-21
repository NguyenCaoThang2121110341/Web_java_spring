package com.nguyencaothang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.nguyencaothang.backend.entity.Category;



public interface CategoryRepository extends JpaRepository<Category, Long> {

}

