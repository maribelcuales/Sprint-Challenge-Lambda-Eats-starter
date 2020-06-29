import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log("history", history);

  const routeToForm = () => {
    console.log("Submitting...");
    setTimeout(() => {
      history.push("/pizza");
    }, 2000);
  };

  return (
    <div className="home-container">
      <div className="home-image">
        <img
        className="home-pizza-image"
        src="https://github.com/maribelcuales/Sprint-Challenge-Lambda-Eats-starter/blob/master/Assets/Pizza.jpg?raw=true"
        alt="pizza"
        />
      </div>
      <div>
        <button onClick={routeToForm}className="pizza-button" >Pizza ?</button>
      </div>
    </div>
  );
};

export default Home; 