package com.nguyencaothang.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyencaothang.backend.entity.Category;
import com.nguyencaothang.backend.service.CategoryService;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
public class CategoryController {
    private CategoryService categoryService;

    // Create Category REST API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category){
        Category savedCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    //Get Product by id REST API
    //http://localhost:8080/api/products/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId){
        Category Category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(Category, HttpStatus.OK);
    }

    //Get All Products REST API
    //http://localhost:8080/api/products
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategorys(){
        List<Category> Categories = categoryService.getAllCategories();
        return new ResponseEntity<>(Categories, HttpStatus.OK);
    }

    //Update Product REST API
    @PutMapping("{id}")
    //http://localhost:8080/api/Products/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long CategoryId, 
            @RequestBody Category Category) {
        Category.setId(CategoryId);
        Category updatedCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
        }

    //Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long CategoryId) {
        categoryService.deleteCategory(CategoryId);
        return new ResponseEntity<>("Category successfully deleted!", HttpStatus.OK);

    }





}
