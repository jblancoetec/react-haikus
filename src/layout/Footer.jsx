import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <LinkFooter icono={faEnvelope} texto="Contactanos" />
      <LinkFooter icono={faShare} texto="Compartir" />
    </footer>
  );
};

export default Footer;
