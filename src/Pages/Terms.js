import React from "react";
import { Container } from "react-bootstrap";
import Navbar2 from "../Components/Navbar2";
import info_line from "../assests/info_line.svg";

import "../css/terms.css";
import Newsletter from "../Components/Newsletter";
import Footer2 from "../Components/Footer2";
import aboutbg from "../assests/about-bg.svg";
import aboutbg1 from "../assests/about-bg-1.svg";

const Terms = () => {
  return (
    <>
      <div className="termsPage">
        <div className="navNHeader">
          <Container>
            <div className="navNHeaderContent">
              <div className="navbar-2">
                <Navbar2 />
              </div>
              <div className="header-title">
                <h2>Terms & Conditions</h2>
              </div>
            </div>
          </Container>
          <img src={aboutbg} alt="aboutbg" className="aboutbg" />
          <img src={aboutbg1} alt="aboutbg1" className="aboutbg1" />
        </div>
        <div className="termsPageContent">
          <Container className="block-container">
            <div className="terms-introduction">
              <img src={info_line} alt="info_line" className="info-line-svg" />
              <h3>Introduction</h3>
              <br />
              <p>
                The dubizzle Group of companies includes dubizzle Middle East FZ
                LLC and dubizzle Motors LLC.
              </p>
              <br />

              <p>
                The dubizzle Group of companies connects users who wish to buy,
                rent or sell physical goods (for example real estate, cars and
                furniture) ("Services"). dubizzle users pay for and consume
                these physical goods offline. In our quest to become more
                customer centric and increase trust and transparency for our
                users, the dubizzle Group of companies also offer other services
                such as car inspections, car evaluations, and photography
                services (all provided through dubizzle Pro, a brand of dubizzle
                Motors LLC). The dubizzle website at www.dubizzle.com and the
                mobile application of the online platform (collectively the
                "Website" or "Platforms") are used to connect buyers and sellers
                and are owned by dubizzle Middle East FZ LLC. UAE mainland
                services such as car inspections, evaluations and car brokering
                services are carried out by dubizzle Motors LLC, known as
                dubizzle Pro.
              </p>
              <br />
              <p>
                These Terms of Service provide you with information about the
                terms upon which we agree to provide, permit and allow you to
                access and use the Website. Please print a copy of these Terms
                of Service and refer to it as you use our Systems and Services.
                You agree to be bound by these Terms of Service if you continue
                using the Website. If you do not agree to these Terms of
                Service, you must immediately refrain from using the Website and
                the Services.
              </p>
              <br />
            </div>
            <div className="terms-introduction">
              <img src={info_line} alt="info_line" className="info-line-svg" />
              <h3>1. Acceptance of these Term of Service</h3>
              <br />
              <p>
                The Website and the Service are provided to you subject to these
                Terms of Service (these "Terms"). By accessing the Website or
                using the Service, you agree that you have read, understood and
                agree to be bound by these Terms. For the purpose of the Terms
                and wherever the context so requires, the terms 'you' and “your”
                shall mean any person who uses the Website or the Service in any
                manner whatsoever including persons browsing the Website and its
                content, posting comments or any content or responding to any
                advertisements or content on the Website.
              </p>
              <br />

              <p>
                1.2 By accessing and/or using the Website and/or the Service,
                you agree to comply with these Terms. Additionally, when using a
                portion of the Service, you agree to conform to any applicable
                posted guidelines for such Service, which may change or be
                updated from time to time at dubizzle’s sole discretion.
              </p>
              <br />
            </div>
            <div className="terms-introduction">
              <img src={info_line} alt="info_line" className="info-line-svg" />
              <h3>2. Description of Service and Content Policy</h3>
              <br />
              <p>
                The Website and the Service are provided to you subject to these
                Terms of Service (these "Terms"). By accessing the Website or
                using the Service, you agree that you have read, understood and
                agree to be bound by these Terms. For the purpose of the Terms
                and wherever the context so requires, the terms 'you' and “your”
                shall mean any person who uses the Website or the Service in any
                manner whatsoever including persons browsing the Website and its
                content, posting comments or any content or responding to any
                advertisements or content on the Website.
              </p>
              <br />

              <p>
                1.2 By accessing and/or using the Website and/or the Service,
                you agree to comply with these Terms. Additionally, when using a
                portion of the Service, you agree to conform to any applicable
                posted guidelines for such Service, which may change or be
                updated from time to time at dubizzle’s sole discretion.
              </p>
              <br />
            </div>
          </Container>
        </div>
        <div className="newsletter-subscribe-container">
          <Newsletter />
        </div>
        <div className="footer-2-container">
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default Terms;
