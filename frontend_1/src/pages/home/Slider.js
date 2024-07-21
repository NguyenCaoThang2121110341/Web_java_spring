import React, { useEffect, useState } from "react";
import { GET_ALL_SLIDERS } from "../../api/apiService";
function Banner() {
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    GET_ALL_SLIDERS(`sliders`).then(item => {
      setSliders(item.data);
    });
}, [sliders]);
return (
  <div class="banner">

    <div class="container">

      <div class="slider-container has-scrollbar">
      {sliders.length > 0 && sliders.map((sli) => (

        <div class="slider-item">
       
            <img src={require(`../../assets/images//${sli.image_path}`)} 
        alt="women's latest fashion sale" class="banner-img"/>

          <div class="banner-content">

            <p class="banner-subtitle">{sli.slider_name}</p>

            <h2 class="banner-title">{sli.slider_description}</h2>

            <p class="banner-text">
              starting at $ <b>20</b>.00
            </p>

            <a href="#" class="banner-btn">Shop now</a>

          </div>

        </div>
 ))}
        {/* <div class="slider-item">

          <img src={require("../../assets/images/banner-2.jpg")} alt="modern sunglasses" class="banner-img"/>

          <div class="banner-content">

            <p class="banner-subtitle">Trending accessories</p>

            <h2 class="banner-title">Modern sunglasses</h2>

            <p class="banner-text">
              starting at $ <b>15</b>.00
            </p>

            <a href="#" class="banner-btn">Shop now</a>

          </div>

        </div>

        <div class="slider-item">

          <img src={require("../../assets/images/banner-3.jpg")} alt="new fashion summer sale" class="banner-img"/>

          <div class="banner-content">

            <p class="banner-subtitle">Sale Offer</p>

            <h2 class="banner-title">New fashion summer sale</h2>

            <p class="banner-text">
              starting at $ <b>29</b>.99
            </p>

            <a href="#" class="banner-btn">Shop now</a>

          </div>

        </div> */}

      </div>

    </div>

  </div>
)
};

export default Banner;