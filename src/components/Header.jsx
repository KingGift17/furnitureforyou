import React, { useRef, useEffect } from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/eco-logo-2.png";
import userIcon from "../assets/images/user-icon.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useAuth from "../custom-hooks/useAuth";

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
  const profileActionRef = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

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

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show-profileActions");

  const menuToggle = () => menuRef.current.classList.toggle("nav-active");
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} />
              <div>
                <Link to="/">
                  <h1>GiftKart</h1>
                </Link>
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
                <div className="badgeCounter">2</div>
              </span>
              <motion.span whileTap={{ rotate: 15 }}>
                <span className="cart-icon" onClick={navigateToCart}>
                  <ShoppingBasketIcon />
                  <div className="badgeCounter">{totalQuantity}</div>
                </span>
              </motion.span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile-actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span>Logout</span>
                  ) : (
                    <div>
                      <Link to="/login">Login</Link>
                      <Link to="/register">Register</Link>
                    </div>
                  )}
                </div>
              </div>
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
