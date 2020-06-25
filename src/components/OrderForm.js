import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
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
            <div className="pizza-form-label">
              <Label htmlFor="pizza-size">Choice of Size</Label>
              <p>Required</p>
            </div>
            <Input type="select" name="pizza-size" id="pizza-size">
              <option>Select</option>
              <option>Solo</option>
              <option>Regular</option>
              <option>Family</option>
              <option>Party</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <div className="pizza-form-label">
              <Label htmlFor="pizza-sauce">Choice of Sauce
              </Label>
              <p>Required</p>
            </div>      
            <FormGroup check>    
            <Label htmlFor="original-red" check>
              <Input 
                type="radio" 
                name="original-red" />{' '}
              Original Red
            </Label>
          </FormGroup>
          <FormGroup check>    
            <Label htmlFor="garlic-ranch" check>
              <Input 
                type="radio" 
                name="garlic-ranch" />{' '}
              Garlic Ranch
            </Label>
          </FormGroup>
          <FormGroup check>    
            <Label htmlFor="bbq-sauce" check>
              <Input 
                type="radio" 
                name="bbq-sauce" />{' '}
              Barbecue Sauce
            </Label>
          </FormGroup>
          <FormGroup check>    
            <Label htmlFor="spinach-alfredo" check>
              <Input 
                type="radio" 
                name="spinach-alfredo" />{' '}
              Spinach Alfredo
            </Label>
          </FormGroup>
        </FormGroup>
gt
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;