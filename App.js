import React from "react";
import ReactDOM from "react-dom/client";

/**
 * #Header
 * - Logo
 * - Nav items
 *
 * #Body
 * - Search
 * - RestaurantContainer
 *   - Restaurant Card
 *
 * #Footer
 * - Copyright
 * - Links
 * - Address
 * - Content
 */

const styleCrad = {
  backgroundColor: "#f0f0f0"
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ReastaurantCard = () => {
  return (
    <div className="res-card" style={styleCrad}>
      <img
      className="res-logo"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/7/5/edec8cd2-313c-4fce-8b7f-b5873ac590ac_40bd387c-9352-4729-882b-aedf2a945d13.JPG" />

      <h3>Shilpa Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-card">
        <ReastaurantCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
