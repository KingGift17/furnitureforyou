import React, { useState } from "react";
import products from "../assets/data/product";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "../styles/pages/ProductDetails.scss";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating d-flex align-items-center gap-5 mb-2">
                  <div className="icons">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                  </div>
                  <p>
                    <span>{avgRating}</span> Rating
                  </p>
                </div>

                <span className="product-price">£{price}</span>
                <p>{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.1 }} className="buy-btn">
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab-wrapper d-flex align-item-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active-tab" : " "}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active-tab" : " "}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab-content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div>reviews</div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
