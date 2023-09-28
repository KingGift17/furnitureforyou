import React, { useRef, useEffect } from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/eco-logo-2.png";
import userIcon from "../assets/images/user-icon.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

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
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("nav-active");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} />
              <div>
                <a to="/">
                  <h1>GiftKart</h1>
                </a>
              </div>
            </div>

            <div className="navbar" ref={menuRef} onClick={menuToggle}>
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
                  <div className="badgeCounter">{totalQuantity}</div>
                </span>
              </motion.span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt="image"
                />
              </span>
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <MenuIcon />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
