import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
  
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li className="login" onClick={() => { isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login") }}>{isLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;