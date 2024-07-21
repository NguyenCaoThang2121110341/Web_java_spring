package com.nguyencaothang.backend.service.impl;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.nguyencaothang.backend.entity.Slider;
import com.nguyencaothang.backend.service.SliderService;
import com.nguyencaothang.backend.repository.SliderRepository;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SliderServiceImpl implements SliderService{
    private SliderRepository sliderRepository;
    @Override
    public Slider createSlider(Slider slider)
    {
        return sliderRepository.save(slider);
    }
    @Override
    public Slider getSliderById(Long sliderId)
    {
        Optional<Slider>optionalSlider=sliderRepository.findById(sliderId);
        return optionalSlider.get();
    }
    @Override
    public List<Slider> getAllSliders()
    {
      
        return sliderRepository.findAll();
    }
    @Override
    public Slider updateSlider(Slider slider)
    {
        Slider exsistingSlider=sliderRepository.findById(slider.getId()).get();
        exsistingSlider.setSlider_name(slider.getSlider_name());
        exsistingSlider.setSlider_description(slider.getSlider_description());
        exsistingSlider.setIcon(slider.getIcon());
        exsistingSlider.setImage_path(slider.getImage_path());
        exsistingSlider.setActive(slider.getActive());
        exsistingSlider.setImage_path(slider.getImage_path());
        exsistingSlider.setCreated_at(slider.getCreated_at());
        exsistingSlider.setCreated_by(slider.getCreated_by());
        exsistingSlider.setUpdated_at(slider.getUpdated_at());
        exsistingSlider.setUpdated_by(slider.getUpdated_by());
        Slider updateSlider=sliderRepository.save(exsistingSlider);
        return updateSlider;
    }
    @Override
    public void deleteSlider(Long sliderId)
    {
        sliderRepository.deleteById(sliderId);
    }
}