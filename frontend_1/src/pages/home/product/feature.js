import { GET_DEAL_PAY_PRODUCTS } from "../../../api/apiService";
import { useEffect, useState } from "react";
const Feature = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GET_DEAL_PAY_PRODUCTS(`products`).then(item => {
      setProducts(item.data);
    });
  }, []);
  const renderShowcaseContainers = () => {
    const showcaseContainers = [];
    const chunkSize = 1;
    const numOfContainers = Math.ceil(products.length / chunkSize);

    for (let i = 0; i < numOfContainers; i++) {
      const start = i * chunkSize;
      const end = start + chunkSize;
      const chunk = products.slice(start, end);

      const showcaseContainer = (
        <div className="showcase-container" key={i}>
          {renderShowcase(chunk)}
        </div>
      );

      showcaseContainers.push(showcaseContainer);
    }

    return showcaseContainers;
  };

  const renderShowcase = (chunk) => {
    return chunk.map((pro) => (
      <div className="showcase">
        <div className="showcase-banner">
          <img
            src={require("../../../assets/images/products/" + pro.image_path)}
            alt="shampoo, conditioner & facewash packs"
            className="showcase-img"
          />
        </div>
        <div className="showcase-content">
          <div className="showcase-rating">
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star" />
            <ion-icon name="star-outline" />
            <ion-icon name="star-outline" />
          </div>
          <a href="#">
            <h3 className="showcase-title">
              {pro.product_name}
            </h3>
          </a>
          <p className="showcase-desc">
            {pro.product_description}
          </p>
          <div className="price-box">
            <p className="price">${pro.regular_price}</p>
            <del>${pro.discount_price}</del>
          </div>
          <button className="add-cart-btn">add to cart</button>
          <div className="showcase-status">
            <div className="wrapper">
              <p>
                already sold: <b>20</b>
              </p>
              <p>
                available: <b>{pro.quantity}</b>
              </p>
            </div>
            <div className="showcase-status-bar" />
          </div>
          <div className="countdown-box">
            <p className="countdown-desc">Hurry Up! Offer ends in:</p>
            <div className="countdown">
              <div className="countdown-content">
                <p className="display-number">360</p>
                <p className="display-text">Days</p>
              </div>
              <div className="countdown-content">
                <p className="display-number">24</p>
                <p className="display-text">Hours</p>
              </div>
              <div className="countdown-content">
                <p className="display-number">59</p>
                <p className="display-text">Min</p>
              </div>
              <div className="countdown-content">
                <p className="display-number">00</p>
                <p className="display-text">Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>
      <div className="showcase-wrapper has-scrollbar">
        {renderShowcaseContainers()}
      </div>
    </div>
  );
};
export default Feature;