import React from "react";
import productImg from "../assets/images/arm-chair-01.jpg";
import AddIcon from "@mui/icons-material/Add";
import "../styles/components/ProductCard.scss";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
      <div className="product-item">
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
        <div className="p-2 product-info">
          <h3 className="product-name">
            <Link to="/shop/id">Modern Armchair</Link>
          </h3>
          <span>Chair</span>
        </div>
        <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">£299</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i>
              <AddIcon />
            </i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
