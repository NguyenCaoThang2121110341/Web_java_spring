package com.nguyencaothang.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyencaothang.backend.entity.Category;
import com.nguyencaothang.backend.service.CategoryService;
import com.nguyencaothang.backend.repository.CategoryRepository;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@AllArgsConstructor

public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.get();
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(Category category) {
        Optional<Category> existingCategory = categoryRepository.findById(category.getId());
        if (existingCategory.isPresent()) {
            Category updatedCategory = existingCategory.get();
            updatedCategory.setCategory_name(category.getCategory_name());
            updatedCategory.setCategory_description(category.getCategory_description());
            updatedCategory.setIcon(category.getIcon());
            updatedCategory.setImage_path(category.getImage_path());
            updatedCategory.setActive(category.isActive());
            updatedCategory.setCreate_at(category.getCreate_at());
            updatedCategory.setUpdate_at(category.getUpdate_at());
            updatedCategory.setCreate_by(category.getCreate_by());
            updatedCategory.setUpdate_by(category.getUpdate_by());
            Category savedCategory = categoryRepository.save(updatedCategory);
            return savedCategory;
        } else {
            throw new NoSuchElementException("Category not found with id: " + category.getId());
        }
    }

    @Override
    public void deleteCategory(Long categoryId) {
        categoryRepository.deleteById(categoryId);
    }

}
