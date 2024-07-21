import { GET_BEST_SELLER_PRODUCTS } from "../../../api/apiService";
import { useEffect, useState } from "react";
function Bestseller() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   GET_ALL_PRODUCTS(`products`).then((response) => {
  //     const allProducts = response.data;
  //     const bestSellerProducts = allProducts.filter(
  //       (pro) => pro.position === "best-seller"
  //     );
  //     setProducts(bestSellerProducts);
  //   });
  // }, []);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GET_BEST_SELLER_PRODUCTS(`products`).then(item => {
      setProducts(item.data);
    });
  }, []);
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading">best sellers</h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">
          {products.length > 0 && products.map((pro) => (
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={require("../../../assets/images/products/" + pro.image_path)}
                  alt="baby fabric shoes"
                  width={75}
                  height={75}
                  className="showcase-img"
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">{pro.product_name}</h4>
                </a>
                <div className="showcase-rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <div className="price-box">
                  <del>${pro.regular_price}</del>
                  <p className="price">${pro.discount_price}</p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/2.jpg")}
                alt="men's hoodies t-shirt"
                className="showcase-img"
                width={75}
                height={75}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">men's hoodies t-shirt</h4>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-half-outline" />
              </div>
              <div className="price-box">
                <del>$17.00</del>
                <p className="price">$7.00</p>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/3.jpg")}
                alt="girls t-shirt"
                className="showcase-img"
                width={75}
                height={75}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">girls t-shirt</h4>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star-half-outline" />
              </div>
              <div className="price-box">
                <del>$5.00</del>
                <p className="price">$3.00</p>
              </div>
            </div>
          </div>
          <div className="showcase">
            <a href="#" className="showcase-img-box">
              <img
                src={require("../../../assets/images/products/4.jpg")}
                alt="woolen hat for men"
                className="showcase-img"
                width={75}
                height={75}
              />
            </a>
            <div className="showcase-content">
              <a href="#">
                <h4 className="showcase-title">woolen hat for men</h4>
              </a>
              <div className="showcase-rating">
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
                <ion-icon name="star" />
              </div>
              <div className="price-box">
                <del>$15.00</del>
                <p className="price">$12.00</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );

};
export default Bestseller;