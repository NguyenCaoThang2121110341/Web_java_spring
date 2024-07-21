package com.nguyencaothang.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyencaothang.backend.entity.Product;
import com.nguyencaothang.backend.service.ProductService;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("api/products")

public class ProductController {
    private ProductService productService;

    // Create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product Product) {
        Product savedProduct = productService.createProduct(Product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get Product by id REST API
    // http://localhost:8080/api/products/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long ProductId) {
        Product Product = productService.getProductById(ProductId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }

    // Get All Products REST API
    // http://localhost:8080/api/products
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> Products = productService.getAllProducts();
        return new ResponseEntity<>(Products, HttpStatus.OK);
    }

    // Update Product REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Products/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long ProductId,
            @RequestBody Product Product) {
        Product.setId(ProductId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId) {
        productService.deleteProduct(ProductId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);

    }

    @GetMapping("/latest")
    public ResponseEntity<List<Product>> getLatestProducts() {
        int showHome = 1; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> latestProducts = productService.getLatestProducts(showHome);
        return new ResponseEntity<>(latestProducts, HttpStatus.OK);
    }

    @GetMapping("/new-arrivals")
    public ResponseEntity<List<Product>> getNewArrivals() {
        int showHome = 2; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> newArrivals = productService.getNewArrivals(showHome);
        return new ResponseEntity<>(newArrivals, HttpStatus.OK);
    }

    @GetMapping("/trending")
    public ResponseEntity<List<Product>> getTrending() {
        int showHome = 3; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> trendingNew = productService.getTrending(showHome);
        return new ResponseEntity<>(trendingNew, HttpStatus.OK);
    }

    @GetMapping("/top-rated")
    public ResponseEntity<List<Product>> getTopRated() {
        int showHome = 4; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> topRated = productService.getTopRated(showHome);
        return new ResponseEntity<>(topRated, HttpStatus.OK);
    }

    @GetMapping("/best-seller")
    public ResponseEntity<List<Product>> getBestSeller() {
        int showHome = 4; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> bestSeller = productService.getBestSeller(showHome);
        return new ResponseEntity<>(bestSeller, HttpStatus.OK);
    }

    @GetMapping("/deal-pay")
    public ResponseEntity<List<Product>> getDealPay() {
        int showHome = 4; // Hoặc giá trị tương ứng với vị trí sản phẩm cần lấy
        List<Product> dealPay = productService.getDealPay(showHome);
        return new ResponseEntity<>(dealPay, HttpStatus.OK);
    }

}
