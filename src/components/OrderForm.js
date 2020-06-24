import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./styles.css"

function OrderForm() {
  return (
    <Container className="form-container"> 
      <Row>
        <Col>
          <h1>
            Build Your Own Pizza
          </h1>
          <img 
            src="https://github.com/maribelcuales/Sprint-Challenge-Lambda-Eats-starter/blob/master/Assets/pizza2.jpg?raw=true"
            alt="whole-pizza"
          />
        </Col>
      </Row>
    </Container>

  );
};

export default OrderForm;