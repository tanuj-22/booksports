import React from "react";
import { Container, Form } from "react-bootstrap";

import "../css/newsletter.css";
const Newsletter = () => {
  return (
    <>
      <Container className="newsletter-container">
        &nbsp;
        <p>NEWSLETTER</p>
        <h1>Subscribe to Our Newsletter for the daily Updates</h1>
        <Form action="" className="row gy-2 gx-3 align-items-center">
          <div className="col-auto" style={{ margin: "30px auto 5% auto" }}>
            <input
              class="form-control"
              type="email"
              id="email-input"
              placeholder="Enter your email.."
            />
            <button type="submit" className="form-control" id="email-input-btn">
              Subscribe
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Newsletter;
