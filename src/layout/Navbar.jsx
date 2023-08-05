import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="menu-bar">
        <span className="logo-container">
          <img src="/logo.png" alt="" className="logo"/>
          <h4>Estatery</h4>
        </span>

        <ul>
          <li className="selected-menuItem">Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property</li>
          <li>Resource</li>
        </ul>
      </div>

      <div className="auth-btns">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </div>
  );
}
