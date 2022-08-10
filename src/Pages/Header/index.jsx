import React from "react";
import "./style.scss";
import "../../assets/Style/Global.scss";
import '../../assets/Style/flex.scss'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="G-Container">
        <div className="headerContainer G-justify-align-center">
          <span className="headerTitle">Zay</span>
          <div className="links">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="shop">Shop</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>
          <div className="icons">
            <div className="icon-search">
              <span></span>
            </div>
            <div className="icon-magazine">
              <span></span>
            </div>
            <div className="icon-liked">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
