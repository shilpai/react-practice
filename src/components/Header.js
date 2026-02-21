import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
  
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  console.log("Header rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li className="login" onClick={() => { isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login") }}>{isLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;