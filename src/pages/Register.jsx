import React, { useState } from "react";
import Helmet from "../components/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { auth } from "../firebase.config.js";
import { storage } from "../firebase.config.js";
import { db } from "../firebase.config.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Login.scss";

const Register = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        () => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            //Used to update a users profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadUrl,
            });

            await setDoc(doc(db, "user", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoUrl: downloadUrl,
            });
          });
        }
      );

      setLoading(false);
      toast.success("Account Created");
      navigate("/login");
      console.log(user);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Helmet title="Register">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Register</h3>

                <Form className="auth-form" onSubmit={register}>
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
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
