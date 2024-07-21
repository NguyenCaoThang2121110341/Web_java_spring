package com.nguyencaothang.backend.controller;



import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyencaothang.backend.entity.Slider;
import com.nguyencaothang.backend.service.SliderService;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("api/sliders")
public class SliderController {
    private SliderService sliderService;

    //Create Slider REST API
    @PostMapping
    public ResponseEntity<Slider> createSlider(@RequestBody Slider slider) {
        Slider savedSlider = sliderService.createSlider(slider);
        return new ResponseEntity<>(savedSlider, HttpStatus.CREATED);
    }

    // Get Slider by id REST API
    // http://localhost:8080/api/Sliders/1
    @GetMapping("{id}")
    public ResponseEntity<Slider> getSliderById(@PathVariable("id") Long sliderId) {
        Slider Slider = sliderService.getSliderById(sliderId);
        return new ResponseEntity<>(Slider, HttpStatus.OK);
    }

    // Get All Slider REST API
    // http://localhost:8080/api/Sliders
    @GetMapping
    public ResponseEntity<List<Slider>> getAllSliders() {
        List<Slider> Sliders = sliderService.getAllSliders();
        return new ResponseEntity<>(Sliders, HttpStatus.OK);
    }

    // Update Slider REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Sliders/1
    public ResponseEntity<Slider> updateSlider(@PathVariable("id") Long sliderId, @RequestBody Slider Slider) {
        Slider.setId(sliderId);
        Slider updatedSlider = sliderService.updateSlider(Slider);
        return new ResponseEntity<>(updatedSlider, HttpStatus.OK);
    }

    // Delete Slider REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteSlider(@PathVariable("id") Long sliderId) {
        sliderService.deleteSlider(sliderId);
        return new ResponseEntity<>("Slider successfully deleted", HttpStatus.OK);
    }
}
