import React, { useState } from "react";
import Helmet from "../components/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/pages/Login.scss";

const Register = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [file, setFile] = useState(null);

  return (
    <Helmet title="Register">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Register</h3>

              <Form className="auth-form">
                <FormGroup className="form-group">
                  <input
                    type="text"
                    placeholder="Enter a Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button type="submit" className="checkout-btn auth-btn">
                  Create an Account
                </button>
                <p>
                  Have an account? <Link to="/login">Login here</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
