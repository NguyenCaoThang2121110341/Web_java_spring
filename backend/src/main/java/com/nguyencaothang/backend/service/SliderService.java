package com.nguyencaothang.backend.service;


import java.util.List;
import com.nguyencaothang.backend.entity.Slider;
public interface SliderService {
    Slider createSlider(Slider slider);
    Slider getSliderById(Long sliderId);
    List<Slider>getAllSliders();
    Slider updateSlider(Slider slider);
    void deleteSlider(Long sliderId);
    
}
