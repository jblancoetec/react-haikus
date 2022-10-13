import React from "react";
import "./LinkFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LinkFooter = ({ icono, texto }) => {
  return (
    <div className="ContenedorLinkFooter">
      <FontAwesomeIcon icon={icono} className="IconoLinkFooter" />
      <div className="TextoLinkFooter">{texto}</div>
    </div>
  );
};

export default LinkFooter;
