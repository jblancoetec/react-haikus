import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div id="contenedorBuscadorHeader">
        <input type="text" name="buscador" id="buscador" placeholder="Buscar" />
        <FontAwesomeIcon icon={faSearch} id="IconoBuscador" />
      </div>
    </header>
  );
};

export default Header;
