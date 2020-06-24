import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <OrderForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
