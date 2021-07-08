import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">User-List App &copy; 2021</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
