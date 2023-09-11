import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet";
import { Col, Container, Row } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/pages/Shop.scss";

const Shop = () => {
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter-widget">
                <select>
                  <option>Filter By Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter-widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">A-Z</option>
                  <option value="descending">Z-A</option>
                  <option value="high">$High-Low</option>
                  <option value="low">$Low-High</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search-box">
                <SearchIcon />
                <input type="text" placeholder="Search" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
