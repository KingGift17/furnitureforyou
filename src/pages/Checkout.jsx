import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/pages/Checkout.scss";

const Checkout = () => {
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
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <h6>Email*</h6>
                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <h6>Phone Number*</h6>
                <FormGroup className="form-group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <h6>Address</h6>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street address*" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Postcode*" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout-cart">
                <h6>
                  Total Qty: <span>0</span>
                </h6>
                <h6>
                  Subtotal: <span>£</span>
                </h6>
                <h6>
                  Shipping: <span>£0.00</span>
                </h6>
                <h6>Free Shipping</h6>
                <h4>
                  Total Cost: <span>£0.00</span>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
