import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Made by{" "}
            <a
              href="https://www.zarrarpalekar.com"
              target="_blank"
              rel="noreferrer"
            >
              Zarrar Palekar{" "}
            </a>{" "}
            <br /> Copyrights &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
