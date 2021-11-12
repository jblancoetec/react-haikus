import React from "react";
import "./Tarjeta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const urlBaseImagen = "https://picsum.photos";

const Tarjeta = () => {
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
          este es un haiku muy chiquito <br />
          para todos aquellos que quieran <br /> verlo
        </div>
        <img src={`${urlBaseImagen}/500/300`} alt="ImagenHaiku" />
      </div>
      <div className="CuerpoTarjeta">
        <div className="InfoTarjeta">
          <img src={`${urlBaseImagen}/32/32`} alt="" />
          <h4>Titulo del Haiku</h4>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
      </div>
    </div>
  );
};

export default Tarjeta;
