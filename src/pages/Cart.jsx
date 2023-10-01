import React from "react";
import "../styles/pages/Cart.scss";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import tdImg from "../assets/images/arm-chair-01.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlices";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
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
                    <tr>
                      <td>
                        <img src={tdImg} alt="" />
                      </td>
                      <td>Modern Arm Chair</td>
                      <td>£300</td>
                      <td>2p</td>
                      <td>
                        <DeleteIcon />
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
