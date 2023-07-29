import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/eco-logo-2.png";
import userIcon from "../assets/images/user-icon.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} />
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
              <span className="fav_icon">
                <FavoriteIcon />
              </span>
              <span className="cart_icon">
                <ShoppingBasketIcon />
              </span>
              <span>
                <img src={userIcon} alt="image" />
              </span>
            </div>

            <div className="mobile-menu">
              <span>
                <MenuIcon />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
