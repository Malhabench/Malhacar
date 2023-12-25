import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import Header from "../components/Header/Header"; 
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";
import { colors } from "@mui/material";

const About = () => {
  return (
    <>
      <Header />
      <Helmet title="About">
        <CommonSection title="About Us" />
        <AboutSection aboutClass="aboutPage" />

        <section className="about__page-section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="about__page-img">
                  <img src={driveImg} alt="" className="w-100 rounded-8" />
                </div>
              </Col>

              <Col lg="6" md="6" sm="12">
                <div className="about__page-content">
                  <h2 className="section__title mb-4">Our Commitment to Safe Ride Solutions</h2>

                  <p className="section__description">
                    We are dedicated to providing safe and reliable ride solutions for our customers. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <p className="section__description">
                    Our team is committed to delivering exceptional service, ensuring your safety and satisfaction on every journey. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <span className="fs-4 me-2">
                      <i className="ri-phone-line"></i>
                    </span>

                    <div>
                      <h6 className="section__subtitle mb-0">Need Any Help?</h6>
                      <h4>+00123456789</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer /> 
    </>
  );
};

export default About;
