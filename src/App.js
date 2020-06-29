import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="route-container">
        <Switch>
          <Route path="/pizza">
            <OrderForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default App;
