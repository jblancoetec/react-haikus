import React from "react";
import "./Footer.css";
import LinkFooter from "./LinkFooter";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LinkCompartir from "../helpers/LinkCompartir";
const Footer = () => {
  return (
    <>
      <div id="espacioReservadoFooter"></div>
      <footer>
        <Link to="/contactanos">
          <LinkFooter icono={faEnvelope} texto="Contactanos" />
        </Link>
        <LinkCompartir>
          <LinkFooter icono={faShare} texto="Compartir" />
        </LinkCompartir>
      </footer>
    </>
  );
};

export default Footer;
