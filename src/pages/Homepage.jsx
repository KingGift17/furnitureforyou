import React from "react";
import Helmet from "../components/Helmet";
import { Col, Container, Row } from "reactstrap";

import heroImg from "../assets/images/galaxy-z-flip-feature.png";

const Homepage = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={6} md={6}>
              <div className="hero-content">
                <p className="hero-subtitle">Trending Product in {year} </p>
                <h2>New from Samsung: Join the flipside</h2>
                <p>
                  The Samsung Galaxy Z Flip 4 is a cutting-edge foldable
                  smartphone that combines style and innovation. Featuring a
                  sleek design, it unfolds into a large, immersive display,
                  providing a seamless user experience. With powerful
                  performance, advanced camera capabilities, and enhanced
                  durability, it redefines the future of mobile technology.
                </p>
                <button className="buy-btn">BUY NOW</button>
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="hero-img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Homepage;
