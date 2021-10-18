import React from "react";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <main>
      <h1 className="H1">Haikus</h1>

      <p className="Subtitulo">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia
        perferendis? Voluptas optio minima tempora iste facere, aperiam libero."
      </p>

      <div id="contenedorPrincipal">{children}</div>
    </main>
  );
};

export default Main;
