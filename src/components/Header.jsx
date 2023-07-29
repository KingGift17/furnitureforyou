import React from "react";
import "../styles/components/header.css";
import logo from "../assets/images/eco-logo.png";

import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>GiftKart</h1>
                <p>Been in Supply and Demand since 2023</p>
              </div>
            </div>

            <div className="navbar">
              <ul className="menu">
                <li className="nav_item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="nav_item">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="nav_item">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </div>

            <div className="nav_icons">
              <span className="cart_icon"></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
