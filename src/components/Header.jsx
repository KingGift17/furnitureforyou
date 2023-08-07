import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/eco-logo-2.png";
import userIcon from "../assets/images/user-icon.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const navLink = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/cart",
    display: "Cart",
  },
];

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
              </div>
            </div>

            <div className="navbar">
              <ul className="menu">
                {navLink.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav-active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-icons">
              <span className="fav-icon">
                <FavoriteIcon />
                <div className="badgeCounter">1</div>
              </span>
              <motion.span whileTap={{ rotate: 15 }}>
                <span className="cart-icon">
                  <ShoppingBasketIcon />
                  <div className="badgeCounter">1</div>
                </span>
              </motion.span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="image"
                />
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
