package com.nguyencaothang.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.nguyencaothang.backend.entity.Product;
import com.nguyencaothang.backend.service.ProductService;
import com.nguyencaothang.backend.repository.ProductRepository;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@AllArgsConstructor

public class ProductServiceImpl implements ProductService {
    private ProductRepository productRepository;

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getProductById(Long productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        return optionalProduct.get();
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product updateProduct(Product product) {
        Optional<Product> existingProduct = productRepository.findById(product.getId());
        if (existingProduct.isPresent()) {
            Product updatedProduct = existingProduct.get();
            updatedProduct.setProduct_name(product.getProduct_name());
            updatedProduct.setSKU(product.getSKU());
            updatedProduct.setRegular_price(product.getRegular_price());
            updatedProduct.setDiscount_price(product.getDiscount_price());
            updatedProduct.setQuantity(product.getQuantity());
            updatedProduct.setShort_description(product.getShort_description());
            updatedProduct.setProduct_description(product.getProduct_description());
            updatedProduct.setProduct_weight(product.getProduct_weight());
            updatedProduct.setProduct_note(product.getProduct_note());
            updatedProduct.setPublished(product.isPublished());
            updatedProduct.setCreated_at(product.getCreated_at());
            updatedProduct.setUpdated_at(product.getUpdated_at());
            updatedProduct.setCreated_by(product.getCreated_by());
            updatedProduct.setUpdated_by(product.getUpdated_by());
            updatedProduct.setCategory(product.getCategory());
            Product savedProduct = productRepository.save(updatedProduct);
            return savedProduct;
        } else {
            throw new NoSuchElementException("Product not found with id: " + product.getId());
        }
    }

    @Override
    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public List<Product> getLatestProducts(int showHome) {
        return productRepository.getLatestProducts(showHome);
    }

    @Override
    public List<Product> getNewArrivals(int showHome) {
        return productRepository.getNewArrivals(showHome);
    }

    @Override
    public List<Product> getTrending(int showHome) {
        return productRepository.getTrending(showHome);
    }

    @Override
    public List<Product> getTopRated(int showHome) {
        return productRepository.getTopRated(showHome);
    }

    @Override
    public List<Product> getBestSeller(int showHome) {
        return productRepository.getBestSeller(showHome);
    }

    @Override
    public List<Product> getDealPay(int showHome) {
        return productRepository.getDealPay(showHome);
    }

}
