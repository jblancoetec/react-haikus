const LinkCompartir = ({ children }) => {
  return (
    <div
      onClick={() =>
        navigator.clipboard.writeText("copiamos la direecion para compartir")
      }
      style={{
        width: "auto",
        height: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default LinkCompartir;
