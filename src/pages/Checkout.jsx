import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/pages/Checkout.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h5 className="mb-4 fw-bold">Billing Information</h5>
              <Form className="billing-form">
                <h6>Full Name*</h6>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Enter your name" required />
                </FormGroup>

                <h6>Email*</h6>
                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email" required />
                </FormGroup>

                <h6>Phone Number*</h6>
                <FormGroup className="form-group">
                  <input type="number" placeholder="Phone number" required />
                </FormGroup>

                <h6>Address</h6>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street address*" required />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Postcode*" required />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout-cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>£{totalAmount}.00</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    (free shipping)
                  </span>
                  <span>£{totalAmount}.00</span>
                </h6>
                <h4>
                  Total Cost: <span>£{totalAmount}</span>
                </h4>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  className="checkout-btn auth-btn w-100"
                >
                  Place an order
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
