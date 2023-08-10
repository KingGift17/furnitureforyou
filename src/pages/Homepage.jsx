import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import "../styles/pages/Homepage.scss";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import ProductsList from "../components/UI/ProductsList";
import heroImg from "../assets/images/galaxy-z-flip-feature.png";
import products from "../assets/data/product.jsx";
import counterImg from "../assets/images/counter-timer-img.png";

const Homepage = () => {
  const [trendingProduct, setTrendingProduct] = useState(products);
  const [bestSalesProduct, setBestSalesProduct] = useState(products);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category == "mobile"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category == "sofa"
    );

    setBestSalesProduct(filteredBestSalesProducts);
    setTrendingProduct(filteredTrendingProducts);
  }, []);

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
                <button className="buy-btn">
                  <Link to="/shop">BUY NOW</Link>
                </button>
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
      <Services />
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Trending Product</h2>
            </Col>
            <ProductsList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="best-sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProduct} />
          </Row>
        </Container>
      </section>

      <section className="timer-count">
        <Container>
          <Row>
            <Col lg="6" mb="6"></Col>
            <Col lg="6" mb="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Homepage;
