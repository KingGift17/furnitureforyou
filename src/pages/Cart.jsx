import React, { useEffect } from "react";
import "../styles/pages/Cart.scss";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlices";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No items in cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                </h6>
                <span className="fs-4 fw-bold">£{totalAmount}.00</span>
              </div>
              <p className="fs-6 mt-2">Taxes and Vax inc.</p>
              <div>
                <button className="cart-btn">
                  <Link to="/checkout">Checkout</Link>
                </button>
                <button className="cart-btn">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>£ {item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.span
          whileHover={{
            color: "red",
            transition: { duration: 1 },
          }}
          onClick={deleteProduct}
        >
          <DeleteIcon />
        </motion.span>
      </td>
    </tr>
  );
};

export default Cart;
