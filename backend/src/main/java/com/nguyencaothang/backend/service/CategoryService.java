package com.nguyencaothang.backend.service;

import java.util.List;
import com.nguyencaothang.backend.entity.Category;

public interface CategoryService {
    Category createCategory(Category category);
    Category getCategoryById(Long categoryId);
    List<Category> getAllCategories();
    Category updateCategory(Category category);
    void deleteCategory(Long categoryId);
    
}


