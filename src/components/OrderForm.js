import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";
import "./styles.css"

function OrderForm() {
  return (
    <div className="form-container">
      <Form>
        <h1>
          Build Your Own Pizza
        </h1>
        <img 
            src="https://github.com/maribelcuales/Sprint-Challenge-Lambda-Eats-starter/blob/master/Assets/pizza2.jpg?raw=true"
            alt="whole-pizza"
          />
        <div className="order-details">
          <h3>Build Your Own Pizza</h3>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name"
              invalid 
            />
            <FormFeedback>Please enter min 2 characters.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <div className="pizza-size-label">
              <Label htmlFor="exampleSelect">Choice of Size</Label>
              <p>Required</p>
            </div>
            <Input type="select" name="size" id="size">
              <option>Solo</option>
              <option>Regular</option>
              <option>Family</option>
              <option>Party</option>
            </Input>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;