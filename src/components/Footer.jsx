import React from "react";
import "../styles/components/Footer.scss";
import logo from "../assets/images/eco-logo-2.png";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} />
              <div>
                <h1>GiftKart</h1>
              </div>
            </div>
          </Col>
          <Col lg="3">.</Col>
          <Col lg="2">.</Col>
          <Col lg="3">.</Col>
        </Row>
      </Container>
    </Footer>
  );
}

export default Footer;
