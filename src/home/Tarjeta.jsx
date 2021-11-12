import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const urlBaseImagen = "https://picsum.photos";

const Tarjeta = ({ autor, haiku }) => {
  const [haikuVisible, setHaikuVisible] = useState(false);

  return (
    <div className="Tarjeta">
      <div
        className="ImagenTarjeta"
        onClick={() => setHaikuVisible(!haikuVisible)}
      >
        <div
          className="ContenedorHaiku"
          style={{
            display: haikuVisible ? "block" : "none",
          }}
        >
          {haiku}
        </div>
        <img src={`${urlBaseImagen}/500/300`} alt="ImagenHaiku" />
      </div>
      <div className="CuerpoTarjeta">
        <div className="InfoTarjeta">
          <img src={`${urlBaseImagen}/32/32`} alt="" />
          <h4>{autor}</h4>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
      </div>
    </div>
  );
};

export default Tarjeta;
