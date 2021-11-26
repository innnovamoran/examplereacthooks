import React from "react";
const Listado = ({ listadoEnMemoria, ModificarValorDelistado }) => {
  return (
    <div
      style={{
        alignSelf: "center",
      }}
    >
      {listadoEnMemoria.map((listado, i) => (
        <div
          key={i}
          style={{
            border: "5px solid #f3f3f3",
            textAlign: "center",
            borderRadius: "10px",
            padding: 5,
            margin: "10px 10px 10px 10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "300px",
          }}
        >
          <h3>
            {listado.nombre} {listado.apellido}
          </h3>
          <button
            onClick={() => {
              ModificarValorDelistado(
                listadoEnMemoria.filter((d) => d.nombre !== listado.nombre)
              );
            }}
            style={{
              background: "#f3f3f3",
              height: 20,
              width: 20,
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default Listado;
