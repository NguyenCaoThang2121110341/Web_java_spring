package com.nguyencaothang.backend.service;

import java.util.List;
import com.nguyencaothang.backend.entity.Product;
import org.springframework.data.jpa.repository.Query;

public interface ProductService {
    Product createProduct(Product product);

    Product getProductById(Long productId);

    List<Product> getAllProducts();

    @Query("SELECT p FROM Product p WHERE p.show_home = ?1 ORDER BY p.created_at DESC")
    List<Product> getLatestProducts(int showHome);

    @Query("SELECT p FROM Product p WHERE p.show_home = ?1 AND p NOT IN (SELECT lp FROM Product lp WHERE lp.show_home = 1)")
    List<Product> getNewArrivals(int showHome);

    @Query("SELECT p FROM Product p WHERE p.show_home = 3")
    List<Product> getTrending(int showHome);

    @Query("SELECT p FROM Product p WHERE p.show_home = 4")
    List<Product> getTopRated(int showHome);

    @Query("SELECT p FROM Product p WHERE p.show_home = 5")
    List<Product> getBestSeller(int showHome);

    @Query("SELECT p FROM Product p WHERE p.show_home = 6")
    List<Product> getDealPay(int showHome);

    Product updateProduct(Product product);

    void deleteProduct(Long productId);

}
