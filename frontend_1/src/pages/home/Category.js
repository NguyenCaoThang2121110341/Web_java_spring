import { ReactComponent as Dress } from "../../assets/images/icons/dress.svg";
import { ReactComponent as Coat } from "../../assets/images/icons/coat.svg";
import { ReactComponent as Glasses } from "../../assets/images/icons/glasses.svg";
import { ReactComponent as Shorts } from "../../assets/images/icons/shorts.svg";
import { ReactComponent as Tee } from "../../assets/images/icons/tee.svg";
import { ReactComponent as Jacket } from "../../assets/images/icons/jacket.svg";
import { ReactComponent as Watch } from "../../assets/images/icons/watch.svg";
import { ReactComponent as Hat } from "../../assets/images/icons/hat.svg";
import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES} from "../../api/apiService";
const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL_CATEGORIES(`categories`).then((response) => {
      const allCategories = response.data;
      const topCategories = allCategories.filter(
        (cat) => cat.category_description === "top"
      );
      setCategories(topCategories);
    });
  }, []);
  return(
    <div className="category">
    <div className="container">
      <div className="category-item-container has-scrollbar">
        {categories.map((cate)=>(
          <div className="category-item">
          <div className="category-img-box">
          <img src={require("../../assets/images/icons/" + cate.image_path)} alt={cate.category_name} width={30} height={30}
                    class="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">{cate.category_name}</h3>
              <p className="category-item-amount">(53)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        ))}
        
        {/* <div className="category-item">
          <div className="category-img-box">
            <Coat width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Winter wear</h3>
              <p className="category-item-amount">(58)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Glasses width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Glasses &amp; lens</h3>
              <p className="category-item-amount">(68)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Shorts width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Shorts &amp; jeans</h3>
              <p className="category-item-amount">(84)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Tee width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">T-shirts</h3>
              <p className="category-item-amount">(35)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Jacket width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Jacket</h3>
              <p className="category-item-amount">(16)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Watch width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Watch</h3>
              <p className="category-item-amount">(27)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div>
        <div className="category-item">
          <div className="category-img-box">
            <Hat width={30} className="menu-title-img" />
          </div>
          <div className="category-content-box">
            <div className="category-content-flex">
              <h3 className="category-item-title">Hat &amp; caps</h3>
              <p className="category-item-amount">(39)</p>
            </div>
            <a href="#" className="category-btn">
              Show all
            </a>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  );
  
};
export default Category;
