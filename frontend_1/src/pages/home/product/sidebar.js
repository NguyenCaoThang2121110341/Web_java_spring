import { ReactComponent as Dress } from "../../../assets/images/icons/dress.svg";
import { ReactComponent as Shoes } from "../../../assets/images/icons/shoes.svg";
import { ReactComponent as Jewelry } from "../../../assets/images/icons/jewelry.svg";
import { ReactComponent as Perfume } from "../../../assets/images/icons/perfume.svg";
import { ReactComponent as Cosmetics } from "../../../assets/images/icons/cosmetics.svg";
import { ReactComponent as Glasses } from "../../../assets/images/icons/glasses.svg";
import { ReactComponent as Bags } from "../../../assets/images/icons/bag.svg";
import Bestseller from "./bestseller";
import { useEffect, useState } from "react";
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from "../../../api/apiService";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL_CATEGORIES(`categories`).then((response) => {
      const allCategories = response.data;
      const sideBarCategories = allCategories.filter(
        (cat) => cat.category_description === "sidebar"
      );
      setCategories(sideBarCategories);
    });
  }, []);
  return (
    <div class="sidebar  has-scrollbar" data-mobile-menu>

      <div class="sidebar-category">

        <div class="sidebar-top">
          <h2 class="sidebar-title">Category</h2>

          <button class="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="sidebar-menu-category-list">

          {categories.length > 0 && categories.map((cat) => (
            <li class="sidebar-menu-category">

              <button class="sidebar-accordion-menu" data-accordion-btn>

                <div class="menu-title-flex">
                  <img src={require("../../../assets/images/icons/" + cat.image_path)} alt={cat.category_name} width={20} height={20}
                    class="menu-title-img" />

                  <p class="menu-title">{cat.category_name}</p>
                </div>


                <div>
                  <ion-icon name="add-outline" class="add-icon"></ion-icon>
                  <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                </div>

              </button>

              <ul class="sidebar-submenu-category-list" data-accordion>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">Shirt</p>
                    <data value="300" class="stock" title="Available Stock">300</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">shorts & jeans</p>
                    <data value="60" class="stock" title="Available Stock">60</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">jacket</p>
                    <data value="50" class="stock" title="Available Stock">50</data>
                  </a>
                </li>

                <li class="sidebar-submenu-category">
                  <a href="#" class="sidebar-submenu-title">
                    <p class="product-name">dress & frock</p>
                    <data value="87" class="stock" title="Available Stock">87</data>
                  </a>
                </li>

              </ul>

            </li>

          ))}




        </ul>
      </div>
      <Bestseller />
    </div>
  )
};
export default Sidebar;
