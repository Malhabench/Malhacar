import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; 
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <>
      <Header />
      <Helmet title="Cars">
        <CommonSection title="Car Listing" />

        <section>
          <Container>
            <Row>
              {carData.map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
      <Footer />
    </>
  );
};

export default CarListing;
