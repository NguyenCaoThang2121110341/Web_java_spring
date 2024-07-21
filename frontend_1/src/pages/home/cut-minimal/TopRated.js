import { GET_TOP_RATED_PRODUCTS } from "../../../api/apiService";
import { useEffect, useState } from "react";
const TopRated = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GET_TOP_RATED_PRODUCTS(`products`).then(item => {
      setProducts(item.data);
    });
  }, []);
  const renderShowcaseContainers = () => {
    const showcaseContainers = [];
    const chunkSize = 4;
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
        <a href="#" className="showcase-img-box">
          <img
            src={require("../../../assets/images/products/" + pro.image_path)}
            alt="pocket watch leather pouch"
            className="showcase-img"
            width={70}
          />
        </a>
        <div className="showcase-content">
          <a href="#">
            <h4 className="showcase-title">
              {pro.product_name}
            </h4>
          </a>
          <a href="#" className="showcase-category">
            {pro.category.category_name}
          </a>
          <div className="price-box">
            <p className="price">${pro.regular_price}</p>
            <del>${pro.discount_price}</del>
          </div>
        </div>
      </div>

    ));
  };

  return (
    <div className="product-showcase">
      <h2 className="title">Top Rated</h2>
      <div className="showcase-wrapper has-scrollbar">
        {renderShowcaseContainers()}
      </div>
    </div>
  );
};
export default TopRated;