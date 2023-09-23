import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "../../styles/components/ProductCard.scss";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/CartSlices.jsx";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );

    toast.success("Product added to cart");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product-item">
        <div className="product-img">
          <Link to={`/shop/${item.id}`}>
            <img src={item.imgUrl} alt="" />
          </Link>
        </div>
        <div className="p-2 product-info">
          <h3 className="product-name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">£{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
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
