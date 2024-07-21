import { useContext, useEffect, useState } from "react";
import { OverlayContext } from "../App";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [langIndex, setLanngIndex] = useState(null);
  const menus = {
    menus: [
      {
        title: "Men's",
        submenu: [
          {
            title: "Shirt",
          },
          {
            title: "Shorts & Jeans",
          },
          {
            title: "Safety Shoes",
          },
          {
            title: "Wallet",
          },
        ],
      },
      {
        title: "Women's",
        submenu: [
          {
            title: "Dress & Frock",
          },
          {
            title: "Earrings",
          },
          {
            title: "Necklace",
          },
          {
            title: "Makeup Kit",
          },
        ],
      },
      {
        title: "Jewelry",
        submenu: [
          {
            title: "Earrings",
          },
          {
            title: "Couple Rings",
          },
          {
            title: "Necklace",
          },
          {
            title: "Bracelets",
          },
        ],
      },
      {
        title: "Perfume",
        submenu: [
          {
            title: "Clothes Perfume",
          },
          {
            title: "Deodorant",
          },
          {
            title: "Flower Fragrance",
          },
          {
            title: "Air Fresher",
          },
        ],
      },
    ],
  };
  const langandcur = {
    langandcur: [
      {
        title: "Language",
        submenu: [
          {
            title: "English",
          },
          {
            title: "Español",
          },
          {
            title: "Frençh",
          },
        ],
      },
      {
        title: "Currency",
        submenu: [
          {
            title: "USD $",
          },
          {
            title: "EUR €",
          },
          {
            title: "JPY ¥",
          },
          {
            title: "VND ₫",
          },
        ],
      },
    ],
  };
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const toggleLang = (index) => {
    if (langIndex === index) {
      setLanngIndex(null);
    } else {
      setLanngIndex(index);
    }
  };

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
          <div className="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>
          <div className="header-top-actions">
            <select name="currency">
              <option value="usd">USD $</option>
              <option value="eur">EUR €</option>
            </select>
            <select name="language">
              <option value="en-US">English</option>
              <option value="es-ES">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <a href="#" className="header-logo">
            <img
              src={require("../assets/images/logo/logo.png")}
              alt="Anon's logo"
              width={120}
              height={36}
            />
          </a>
          <div className="header-search-container">
            <input
              type="search"
              name="search"
              className="search-field"
              placeholder="Enter your product name..."
            />
            <button className="search-btn">
              <ion-icon name="search-outline" />
            </button>
          </div>
          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="person-outline" />
            </button>
            <button className="action-btn">
              <ion-icon name="heart-outline" />
              <span className="count">0</span>
            </button>
            <button className="action-btn">
              <ion-icon name="bag-handle-outline" />
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Categories
              </a>
              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Desktop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Laptop</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Camera</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Tablet</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Headphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={require("../assets/images/electronics-banner-1.jpg")}
                        alt="headphone collection"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Men's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sports</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Jacket</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Sunglasses</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={require("../assets/images/mens-banner.jpg")}
                        alt="men's fashion"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Women's</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Formal</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Casual</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Perfume</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Cosmetics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Bags</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={require("../assets/images/womens-banner.jpg")}
                        alt="women's fashion"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Electronics</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart Watch</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Smart TV</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Keyboard</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Mouse</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">Microphone</a>
                  </li>
                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src={require("../assets/images/electronics-banner-2.jpg")}
                        alt="mouse collection"
                        width={250}
                        height={119}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Men's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Shirt</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Shorts &amp; Jeans</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Women's
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Dress &amp; Frock</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Jewelry
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Earrings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Necklace</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Perfume
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>
                <li className="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>
            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn="">
          <ion-icon name="menu-outline" />
        </button>
        <button className="action-btn">
          <ion-icon name="bag-handle-outline" />
          <span className="count">0</span>
        </button>
        <button className="action-btn">
          <ion-icon name="home-outline" />
        </button>
        <button className="action-btn">
          <ion-icon name="heart-outline" />
          <span className="count">0</span>
        </button>
        <button className="action-btn" data-mobile-category-open-btn="">
          <ion-icon name="grid-outline" />
        </button>
      </div>
      <nav
        className="mobile-navigation-menu  has-scrollbar"
        data-mobile-menu=""
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" data-mobile-menu-close-btn="">
            <ion-icon name="close-outline" />
          </button>
        </div>
        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>
          {menus.menus.map((item, index) => {
            return (
              <li className="menu-category" key={index}>
                <button
                  className={`accordion-menu${
                    activeIndex === index ? " active" : ""
                  }`}
                  data-accordion-btn=""
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="menu-title">{item.title}</p>
                  <div>
                    {(() => {
                      if (activeIndex === index) {
                        return (
                          <ion-icon
                            name="remove-outline"
                            className="remove-icon"
                          />
                        );
                      } else {
                        return (
                          <ion-icon name="add-outline" className="add-icon" />
                        );
                      }
                    })()}
                  </div>
                </button>
                <ul
                  className={`submenu-category-list ${
                    activeIndex === index ? "active" : ""
                  }`}
                  data-accordion=""
                >
                  {item.submenu.map((subitem, subindex) => {
                    return (
                      <li className="submenu-category" key={subindex}>
                        <a href="#" className="submenu-title">
                          {subitem.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}

          <li className="menu-category">
            <a href="#" className="menu-title">
              Blog
            </a>
          </li>
          <li className="menu-category">
            <a href="#" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>
        <div className="menu-bottom">
          <ul className="menu-category-list">
            {langandcur.langandcur.map((item, index) => {
              return (
                <li className="menu-category" key={index}>
                  <button
                    className={`accordion-menu${
                      langIndex === index ? " active" : ""
                    }`}
                    onClick={() => toggleLang(index)}
                    data-accordion-btn=""
                  >
                    <p className="menu-title">{item.title}</p>
                    <ion-icon
                      name="caret-back-outline"
                      className="caret-back"
                    />
                  </button>
                  <ul
                    className={`submenu-category-list${
                      langIndex === index ? " active" : ""
                    }`}
                    data-accordion=""
                  >
                    {item.submenu.map((subitem, subindex) => {
                      return (
                        <li className="submenu-category" key={subindex}>
                          <a href="#" className="submenu-title">
                            {subitem.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
