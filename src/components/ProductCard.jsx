import React from "react";
import productImg from "../assets/images/arm-chair-01.jpg";
import AddIcon from "@mui/icons-material/Add";
import "../styles/components/ProductCard.scss";
import { Col } from "reactstrap";

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
      <div className="product-item">
        <div className="product-img">
          <img src={productImg} alt="" />
        </div>
        <div className="p-2 product-info">
          <h3 className="product-name">Modern Armchair</h3>
          <span className="text-center d-block">Chair</span>
        </div>
        <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">£299</span>
          <span>
            <AddIcon />
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
