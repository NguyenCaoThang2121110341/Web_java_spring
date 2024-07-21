package com.nguyencaothang.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nguyencaothang.backend.entity.Product;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

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
}
