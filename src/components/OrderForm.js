import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, CustomInput } from "reactstrap";
import * as yup from "yup";
import axios from "axios";
import "./styles.css"

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .required("Min of 2 sharacters"),
  size: yup 
    .string()
    .required("Please select a size"),
  sauce: yup
    .string()
    .required("Please select a sauce"),
  toppings: yup
    .string()
    .required("Please select a topping"),
  instructions: yup
    .string()
})

function OrderForm() {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    substitute: "",
    instructions: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: "",
    instructions: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid=> {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({
          ...errors, 
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState, [e.target.name]: e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  }
  
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
              value={formState.name}
              onChange={inputChange}
              invalid 
            />
            <FormFeedback>
              Please enter min 2 characters.
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <div className="pizza-form-label">
              <Label htmlFor="size">
                Choice of Size
              </Label>
              <p>Required</p>
            </div>
              <Input 
                type="select" 
                name="size" 
                id="size"
                onChange={inputChange}
              >
              <option>Select</option>
              <option value="solo">Solo</option>
              <option value="regular">Regular</option>
              <option value="family">Family</option>
              <option value="party">Party</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <div className="pizza-form-label">
              <Label htmlFor="sauce">
                Choice of Sauce
              </Label>
              <p>Required</p>
            </div>      
            <FormGroup check>    
            <Label htmlFor="original-red" check>
              <Input 
                type="radio" 
                name="original-red"
                checked={formState.sauce}
                onChange={inputChange}
              />{' '}
              Original Red
            </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="garlic-ranch" check>
                <Input 
                  type="radio" 
                  name="garlic-ranch"
                  checked={formState.sauce}
                  onChange={inputChange}
                />{' '}
                Garlic Ranch
              </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="bbq-sauce" check>
                <Input 
                  type="radio" 
                  name="bbq-sauce" 
                  checked={formState.sauce}
                  onChange={inputChange}
                />{' '}
                Barbecue Sauce
              </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="spinach-alfredo" check>
                <Input 
                  type="radio" 
                  name="spinach-alfredo" 
                  checked={formState.sauce}
                  onChange={inputChange}
                />{' '}
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
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
                Pepperoni
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="onions" check>
                <Input 
                  name="onions"
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
                Onions
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="green-pepper" check>
                <Input 
                  name="green-pepper"
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
                Green Pepper
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="diced-tomatoes" check>
                <Input 
                  name="diced-tomatoes"
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
                Diced Tomatoes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="canadian-bacon" check>
                <Input 
                  name="canadian-bacon"
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
                Canadian Bacon
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="extra-cheese" check>
                <Input 
                  name="extra-cheese"
                  type="checkbox" 
                  checked={formState.toppings}
                  onChange={inputChange}
                />{' '}
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
              <Label htmlFor="instructions">
                Special Instructions
              </Label>
            </div>
            <Input 
              type="textarea" 
              name="instructions" 
              id="instructions"
              value={formState.instructions}
              onChange={inputChange}
              placeholder="Anything else you'd like to add?" 
            />
          </FormGroup>
        </div>
        <div>
          <button>Add to Order</button>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;