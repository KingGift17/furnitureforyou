import React from "react";
import products from "../assets/data/product";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

const ProductDetails = () => {
  return (
    <Helmet>
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="6"></Col>
            <Col lg="6"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
