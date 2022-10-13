import React from "react";
import "./LinkCompartir.css";

const LinkCompartir = ({ children, link }) => {
  return (
    <div
      onClick={() => navigator.clipboard.writeText({ link })}
      className="ContenedorLinkCompartir"
    >
      {children}
    </div>
  );
};

export default LinkCompartir;
