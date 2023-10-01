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
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing-form">
                <FormGroup className="form-group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder="PostCode" />
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
