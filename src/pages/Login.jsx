import React from "react";
import Helmet from "../components/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/pages/Login.scss";

const Login = () => {
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4">Login</h3>

              <Form className="auth-form">
                <FormGroup className="form-group">
                  <input type="email" placeholder="Enter your email"></input>
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                  ></input>
                </FormGroup>
                <button className="checkout-btn auth-btn">Login</button>
                <p>
                  Dont have an account?{" "}
                  <Link to="/register">Register here</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
