import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
const Main = ({ children }) => {
  return (
    <main>
      <Link to="/">
        <h1 className="H1">Haikus</h1>
      </Link>

      <p className="Subtitulo">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia
        perferendis? Voluptas optio minima tempora iste facere, aperiam libero."
      </p>

      <div id="contenedorPrincipal">{children}</div>
    </main>
  );
};

export default Main;
