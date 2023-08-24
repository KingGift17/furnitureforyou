import React from "react";
import "../styles/components/Footer.scss";
import logo from "../assets/images/eco-logo-2.png";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">GiftKart</h1>
              </div>
            </div>
            <p className="footer-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dolorem consequuntur eum quam qui delectus quae sed, consequatur
              natus quos.
            </p>
          </Col>
          <Col lg="3">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofas</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/Cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer-quicklinks">
              <h4 className="quicklinks-title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <PlaceIcon />
                  <p>123 Unversity Road, Leicester LE1 2AB</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <EmailIcon />
                  <p>obaz1717@gmail.com</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <LinkedInIcon />
                  <p>
                    <Link
                      to="https://www.linkedin.com/in/ovie-g-bazunu/"
                      target="_blank"
                    >
                      Ovie G Bazunu
                    </Link>
                  </p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <GitHubIcon />
                  <p>
                    <Link to="https://github.com/KingGift17" target="_blank">
                      KingGift17
                    </Link>
                  </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer_copyright">
              Copyright &copy;{year} developed by Ovie G Bazunu. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
