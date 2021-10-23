import React from "react";
import "./Contactanos.css";
import LinkContactanos from "./LinkContactanos";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Contactanos = () => {
  return (
    <div>
      <div className="ContenedorIconosRedesSociales">
        <LinkContactanos icono={faEnvelope} />
        <LinkContactanos icono={faFacebook} />
        <LinkContactanos icono={faInstagramSquare} />
      </div>
      <p className="Parrafo">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        porro sapiente debitis odit quos, rem a! Aliquid rem dolorem atque
        ratione, velit nulla nam magni? Autem praesentium repudiandae eius.
        Assumenda.
      </p>
    </div>
  );
};

export default Contactanos;
