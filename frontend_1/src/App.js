import { createContext, useEffect, useState } from "react";
import "./assets/scss/app.scss";
import "./assets/js/script.js"

import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Modal from "./pages/home/Modal";
import Notification from "./pages/home/Notification";
export const OverlayContext = createContext();

function App() {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const handleOverlayClick = () => {
    setIsOverlayActive(false);
  };

  useEffect(() => {
    const mobileMenuOpenBtn = document.querySelectorAll(
      "[data-mobile-menu-open-btn]"
    );
    const mobileCategoryOpenBtn = document.querySelectorAll(
      "[data-mobile-category-open-btn]"
    );
    const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
    const mobileCategory = document.querySelectorAll("[data-mobile-category]");
    const mobileMenuCloseBtn = document.querySelectorAll(
      "[data-mobile-menu-close-btn]"
    );
    const mobileCategoryCloseBtn = document.querySelectorAll(
      "[data-mobile-category-close-btn]"
    );

    const mobileMenuCloseFunc = function () {
      mobileMenu.forEach((menu) => {
        menu.classList.remove("active");
        setIsOverlayActive(false);
      });
      // Các xử lý khác khi đóng menu
    };
    const mobileCatCloseFunc = function () {
      mobileCategory.forEach((menu) => {
        menu.classList.remove("active");
        setIsOverlayActive(false);
      });
      // Các xử lý khác khi đóng menu
    };

    mobileMenuOpenBtn.forEach((btn, i) => {
      btn.addEventListener("click", function () {
        mobileMenu.forEach((menu) => {
          menu.classList.add("active");
          setIsOverlayActive(true);
        });
        // Các xử lý khác khi mở menu
      });
      mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
    });
    mobileCategoryOpenBtn.forEach((btn, i) => {
      btn.addEventListener("click", function () {
        mobileCategory.forEach((menu) => {
          menu.classList.add("active");
          setIsOverlayActive(true);
        });
        // Các xử lý khác khi mở category
      });
      // mobileCategoryCloseBtn[i].addEventListener("click", mobileCatCloseFunc);
    });

    return () => {
      mobileMenuOpenBtn.forEach((btn, i) => {
        btn.removeEventListener("click", function () {
          mobileMenu.forEach((menu) => {
            menu.classList.add("active");
            setIsOverlayActive(true);
          });
        });
        mobileMenuCloseBtn[i].removeEventListener("click", mobileMenuCloseFunc);
      });
      mobileCategoryOpenBtn.forEach((btn, i) => {
        btn.removeEventListener("click", function () {
          mobileCategory.forEach((menu) => {
            menu.classList.add("active");
            setIsOverlayActive(true);
          });
        });
        mobileCategoryCloseBtn[i].removeEventListener(
          "click",
          mobileCatCloseFunc
        );
      });
      if (isOverlayActive === true) {
        mobileMenuCloseFunc();
        mobileCatCloseFunc();
      }
    };
  }, [isOverlayActive]);

  return (
    <>
      <OverlayContext.Provider value={{ isOverlayActive, setIsOverlayActive }}>
        <div
          className={`overlay${isOverlayActive ? " active" : ""}`}
          onClick={handleOverlayClick}
          data-overlay
        ></div>
        <Modal />
        <Notification />
        <Header />
        <Main />
        <Footer />
      </OverlayContext.Provider>
    </>
  );
}

export default App;
