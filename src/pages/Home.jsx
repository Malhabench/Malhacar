import React from "react";
import Helmet from "../components/Helmet/Helmet";
import Header from "../components/Header/Header";
import HeroSlider from "../components/UI/HeroSlider";
import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Helmet title="Home">
        <section className="p-0 hero__slider-section">
          <HeroSlider />
          <div className="hero__form">
            <Container>
              <Row className="form__row">
                <Col lg="4" md="4">
                  <div className="find__cars-left">
                    <h2>Find your car here</h2>
                  </div>
                </Col>
                <Col lg="8" md="8" sm="12">
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <AboutSection />
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h2 className="section__title">Our Services</h2>
              </Col>
              <ServicesList />
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center mb-5">
                <h2 className="section__title">Hot Offers</h2>
              </Col>
              {carData.slice(0, 6).map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-4 text-center">
                <h2 className="section__title">Client Comments</h2>
              </Col>
              <Testimonial />
            </Row>
          </Container>
        </section>
        <section>
          <Container>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  );
};

export default Home;
