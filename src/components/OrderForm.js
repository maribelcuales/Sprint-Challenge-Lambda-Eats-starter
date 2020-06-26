import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import * as yup from "yup";
import axios from "axios";
import "./styles.css"

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .required("Please enter min 2 characters."),
  size: yup 
    .string()
    .required("Please select a size"),
  sauce: yup
    .string()
    .required("Please select a sauce"),
  pepperoni: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  onions: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  greenPepper: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  dicedTomatoes: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  canadianBacon: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  extraCheese: yup
    .boolean()
    .oneOf([true], "Please select a topping"),
  instructions: yup
    .string()
})

function OrderForm() {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    sauce: "",
    pepperoni: "",
    onions: "",
    greenPepper: "",
    dicedTomatoes: "",
    canadianBacon: "",
    extraCheese: "",
    substitute: "",
    instructions: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    // toppings: "",
    // instructions: ""
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

  const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        setPost(res.data);
        console.log("success", post);
      
        setFormState({
          name: "",
          size: "",
          sauce: "",
          pepperoni: "",
          onions: "",
          greenPepper: "",
          dicedTomatoes: "",
          canadianBacon: "",
          extraCheese: "",
          substitute: "",
          instructions: ""
        })
        
      })
      .catch(err => {
        console.log(err.res);
      });
  };

  const inputChange = e => {
    e.persist();
    const newFormData = {
      ...formState, [e.target.name]: 
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
  }
  
  return (
    <div className="form-container">
      <Form onSubmit={formSubmit}>
        <h1>
          Build Your Own Pizza
        </h1>
        <img 
            src="https://github.com/maribelcuales/Sprint-Challenge-Lambda-Eats-starter/blob/master/Assets/pizza2.jpg?raw=true"
            alt="whole-pizza"
          />
        <div className="order-details">
          <h3>Build Your Own Pizza</h3>
          
          {/* Name Input */}
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name"
              value={formState.name}
              onChange={inputChange}
              // invalid 
            />
            {errors.name.length > 2 ? <p className="error">{errors.name}</p> : null }
          </FormGroup>

          {/* Pizza Sizes */}
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

          {/* Pizza Sauce Options */}
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
                name="sauce"
                value="original-red"                
                onChange={inputChange}
              />{' '}
              Original Red
            </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="garlic-ranch" check>
                <Input 
                  type="radio" 
                  name="sauce"
                  value="garlic-ranch"
                  onChange={inputChange}
                />{' '}
                Garlic Ranch
              </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="bbq-Sauce" check>
                <Input 
                  type="radio" 
                  name="sauce" 
                  value="bbq-sauce"
                  onChange={inputChange}
                />{' '}
                Barbecue Sauce
              </Label>
            </FormGroup>
            <FormGroup check>    
              <Label htmlFor="spinach-alfredo" check>
                <Input 
                  type="radio" 
                  name="sauce" 
                  value="spinach-alfredo"
                  onChange={inputChange}
                />{' '}
                Spinach Alfredo
              </Label>
            </FormGroup>
          </FormGroup>

          {/* Pizza Toppings */}
          <FormGroup> 
            <div className="pizza-form-label">
              <Label htmlFor="toppings">
                Add Toppings
              </Label>
              <p>Choose below:</p>
            </div>
            <FormGroup check>
              <Label htmlFor="pepperoni" check>
                <Input 
                  name="pepperoni"
                  type="checkbox" 
                  checked={formState.pepperoni}
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
                  checked={formState.onions}
                  onChange={inputChange}
                />{' '}
                Onions
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="greenPepper" check>
                <Input 
                  name="greenPepper"
                  type="checkbox" 
                  checked={formState.greenPepper}
                  onChange={inputChange}
                />{' '}
                Green Pepper
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="dicedTomatoes" check>
                <Input 
                  name="dicedTomatoes"
                  type="checkbox" 
                  checked={formState.dicedTomatoes}
                  onChange={inputChange}
                />{' '}
                Diced Tomatoes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="canadianBacon" check>
                <Input 
                  name="canadianBacon"
                  type="checkbox" 
                  checked={formState.canadianBacon}
                  onChange={inputChange}
                />{' '}
                Canadian Bacon
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label htmlFor="extraCheese" check>
                <Input 
                  name="extraCheese"
                  type="checkbox" 
                  checked={formState.extraCheese}
                  onChange={inputChange}
                />{' '}
                Extra Cheese
              </Label>
            </FormGroup>
          </FormGroup>

          {/* Choice of Substitute */}
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
          
          {/* Instructions */}
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
          <button disabled={buttonDisabled}>Add to Order</button>
        </div>
      </Form>
    </div>
  );
};

export default OrderForm;