import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback, CustomInput } from "reactstrap";
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
              <Label htmlFor="pizza-sauce">
                Choice of Sauce
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
        <FormGroup> 
          <div className="pizza-form-label">
            <Label htmlFor="toppings">
              Add Toppings
            </Label>
            <p>Choose up to 4</p>
          </div>
          <FormGroup check>
            <Label htmlFor="pepperoni" check>
              <Input 
                name="pepperoni"
                type="checkbox" />{' '}
              Pepperoni
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label htmlFor="onions" check>
              <Input 
                name="onions"
                type="checkbox" />{' '}
              Onions
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label htmlFor="green-pepper" check>
              <Input 
                name="green-pepper"
                type="checkbox" />{' '}
              Green Pepper
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label htmlFor="dice-tomatoes" check>
              <Input 
                name="diced-tomatoes"
                type="checkbox" />{' '}
              Diced Tomatoes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label htmlFor="canadian-bacon" check>
              <Input 
                name="canadian-bacon"
                type="checkbox" />{' '}
              Canadian Bacon
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label htmlFor="extra-cheese" check>
              <Input 
                name="extra-cheese"
                type="checkbox" />{' '}
              Extra Cheese
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <div className="pizza-form-label">
            <Label htmlFor="substitute">
              Choice of Substitute
            </Label>
            <p>Choose up to 1</p>
          </div>
          <div>
            <CustomInput 
              type="switch" 
              id="substitute" 
              name="substitute" 
              label="Gluten Free Crust (+ $100)" />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="pizza-form-label">
            <Label htmlFor="special-instructions">
              Special Instructions
            </Label>
          </div>
          <Input 
            type="textarea" 
            name="special-instructions" 
            id="special-instructions"
            placeholder="Anything else you'd like to add?" 
          />
        </FormGroup>
        </div>
        <div>
          
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;