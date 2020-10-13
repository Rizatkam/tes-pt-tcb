import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import numeral from "numeral";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Carousel as={Col}></Carousel>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};
export default Home;
