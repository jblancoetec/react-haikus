import React from "react";
import "./Home.css";
import Tarjeta from "./Tarjeta";
const Home = () => {
  return (
    <>
      <h4 className="H4">Colección</h4>
      <div id="galeria">
        <Tarjeta autor="un autor" haiku="un haiku" />
      </div>
    </>
  );
};

export default Home;
