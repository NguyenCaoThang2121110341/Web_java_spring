const Siebar = () => (
    <div className="product-container">
        <div className="container">
            {/*
    - SIDEBAR
  */}
            <div className="sidebar has-scrollbar" data-mobile-category="">
                <div className="sidebar-category">
                    <div className="sidebar-top">
                        <h2 className="sidebar-title">Category</h2>
                        <button
                            className="sidebar-close-btn"
                            data-mobile-category-close-btn=""
                        >
                            <ion-icon name="close-outline" />
                        </button>
                    </div>
                    <ul className="sidebar-menu-category-list">
                        {categories.categories.map((item, index) => {
                            return (
                                <li className="sidebar-menu-category" key={index}>
                                    <button
                                        className={`sidebar-accordion-menu${activeIndex === index ? " active" : ""
                                            }`}
                                        onClick={() => toggleAccordion(index)}
                                        data-accordion-btn=""
                                    >
                                        <div className="menu-title-flex">
                                            {item.icon}
                                            <p className="menu-title">{item.title}</p>
                                        </div>
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
                                                        <ion-icon
                                                            name="add-outline"
                                                            className="add-icon"
                                                        />
                                                    );
                                                }
                                            })()}
                                        </div>
                                    </button>
                                    <ul
                                        className={`sidebar-submenu-category-list ${activeIndex === index ? "active" : ""
                                            }`}
                                        data-accordion=""
                                    >
                                        {item.submenu.map((subitem, subindex) => {
                                            return (
                                                <li
                                                    className="sidebar-submenu-category"
                                                    key={subindex}
                                                >
                                                    <a href="#" className="sidebar-submenu-title">
                                                        <p className="product-name">{subitem.title}</p>
                                                        <data
                                                            value={subitem.stock}
                                                            className="stock"
                                                            title="Available Stock"
                                                        >
                                                            {subitem.stock}
                                                        </data>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="product-showcase">
                    <h3 className="showcase-heading">best sellers</h3>
                    <div className="showcase-wrapper">
                        <div className="showcase-container">
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img
                                        src={require("../../assets/images/products/1.jpg")}
                                        alt="baby fabric shoes"
                                        width={75}
                                        height={75}
                                        className="showcase-img"
                                    />
                                </a>
                                <div className="showcase-content">
                                    <a href="#">
                                        <h4 className="showcase-title">baby fabric shoes</h4>
                                    </a>
                                    <div className="showcase-rating">
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                        <ion-icon name="star" />
                                    </div>
                                    <div className="price-box">
                                        <del>$5.00</del>
                                        <p className="price">$4.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="showcase">
                                <a href="#" className="showcase-img-box">
                                    <img
                                        src={require("../../assets/images/products/2.jpg")}
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
                                        src={require("../../assets/images/products/3.jpg")}
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
                                        src={require("../../assets/images/products/4.jpg")}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

);
export default Siebar;

