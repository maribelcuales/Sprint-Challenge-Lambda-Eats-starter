import React from "react";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img
        className="home-image"
        src="https://github.com/maribelcuales/Sprint-Challenge-Lambda-Eats-starter/blob/master/Assets/Pizza.jpg?raw=true"
        alt="pizza"
        />
      </div>
      <div>
        <button>Pizza ?</button>
      </div>
    </div>
  );
};

export default Home; 