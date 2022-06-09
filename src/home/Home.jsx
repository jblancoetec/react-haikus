import React from "react";
import "./Home.css";
import Tarjeta from "./Tarjeta";
import obtenerHaikus from "../data/obtenerHaikus";
const Home = () => {
  const data = obtenerHaikus();
  return (
    <>
      <h4 className="H4">Colección</h4>
      <div id="galeria">
        <Tarjeta autor="un autor" haiku="un haiku" />
        {data}
      </div>
    </>
  );
};

export default Home;
