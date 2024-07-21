import { ReactComponent as Dress } from "../../../assets/images/icons/dress.svg";
import { ReactComponent as Shoes } from "../../../assets/images/icons/shoes.svg";
import { ReactComponent as Jewelry } from "../../../assets/images/icons/jewelry.svg";
import { ReactComponent as Perfume } from "../../../assets/images/icons/perfume.svg";
import { ReactComponent as Cosmetics } from "../../../assets/images/icons/cosmetics.svg";
import { ReactComponent as Glasses } from "../../../assets/images/icons/glasses.svg";
import { ReactComponent as Bags } from "../../../assets/images/icons/bag.svg";
import { useState } from "react";
import Sidebar from "./sidebar";
import Minimal from "./minimal";
import Feature from "./feature";
import Grid from "./grid";


const Product = () => {
  // const [activeIndex, setActiveIndex] = useState(null);
  // const categories = {
  //   categories: [
  //     {
  //       title: "Clothes",
  //       icon: <Dress width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Shirt",
  //           stock: 300,
  //         },
  //         {
  //           title: "Shorts & Jeans",
  //           stock: 60,
  //         },
  //         {
  //           title: "Jacket",
  //           stock: 50,
  //         },
  //         {
  //           title: "Dress & Frock",
  //           stock: 87,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Footwear",
  //       icon: <Shoes width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Sports",
  //           stock: 45,
  //         },
  //         {
  //           title: "Formal",
  //           stock: 75,
  //         },
  //         {
  //           title: "Casual",
  //           stock: 35,
  //         },
  //         {
  //           title: "Safety Shoes",
  //           stock: 26,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Jewelry",
  //       icon: <Jewelry width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Earrings",
  //           stock: 46,
  //         },
  //         {
  //           title: "Couple Rings",
  //           stock: 73,
  //         },
  //         {
  //           title: "Necklace",
  //           stock: 61,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Perfume",
  //       icon: <Perfume width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Clothes Perfume",
  //           stock: 12,
  //         },
  //         {
  //           title: "Deodorant",
  //           stock: 60,
  //         },
  //         {
  //           title: "Jacket",
  //           stock: 50,
  //         },
  //         {
  //           title: "Dress & Frock",
  //           stock: 87,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Cosmetics",
  //       icon: <Cosmetics width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Shampoo",
  //           stock: 68,
  //         },
  //         {
  //           title: "Sunscreen",
  //           stock: 46,
  //         },
  //         {
  //           title: "Body Wash",
  //           stock: 79,
  //         },
  //         {
  //           title: "Makeup Kit",
  //           stock: 23,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Glasses",
  //       icon: <Glasses width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Sunglasses",
  //           stock: 50,
  //         },
  //         {
  //           title: "Lenses",
  //           stock: 48,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Bags",
  //       icon: <Bags width={20} height={20} />,
  //       submenu: [
  //         {
  //           title: "Shopping Bag",
  //           stock: 62,
  //         },
  //         {
  //           title: "Gym Backpack",
  //           stock: 35,
  //         },
  //         {
  //           title: "Purse",
  //           stock: 80,
  //         },
  //         {
  //           title: "Wallet",
  //           stock: 75,
  //         },
  //       ],
  //     },
  //   ],
  // };

  // const toggleAccordion = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(null);
  //   } else {
  //     setActiveIndex(index);
  //   }
  // };

  return (
    <div className="product-container">
      <div className="container">
     <Sidebar/>
     
        <div className="product-box">
          {/*
      - PRODUCT MINIMAL
    */}
      <Minimal/>
          {/*
      - PRODUCT FEATURED
    */}
          <Feature/>
          {/*
      - PRODUCT GRID
    */}
          <Grid/>
        </div>
      </div>
    </div>
  );
};

export default Product;
