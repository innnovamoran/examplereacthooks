import "./App.css";
import { useState } from "react";
import Listado from "./components/Listado";
const App = () => {
  // hook que permite almacenar cualquier valor en memoria sin ser modificado por le ciclo de vida de react
  const [listadoEnMemoria, ModificarValorDelistado] = useState([]);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const formulario = () => (
    <div
      style={{
        alignSelf: "center",
        border: "3px solid #f3f3f3",
        borderRadius: "10px",
        width: "300px",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d7ccc8",
      }}
    >
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre"}
        style={{
          margin: "10px 10px 10px 10px",
          padding: 5,
          border: "3px solid #f3f3f3",
          borderRadius: "10px",
        }}
      />
      <input
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder={"Apellido"}
        style={{
          margin: "10px 10px 10px 10px",
          padding: 5,
          border: "3px solid #f3f3f3",
          borderRadius: "10px",
        }}
      />
      <button
        onClick={() => {
          if (nombre.length > 0) {
            ModificarValorDelistado([
              ...listadoEnMemoria,
              { nombre, apellido },
            ]);
            setNombre("");
            setApellido("");
          }
        }}
        style={{
          padding: 10,
          textAlign: "center",
          background: "#f3f3f3",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Agregar
      </button>
    </div>
  );
  const titulo = () => (
    <h1 style={{ padding: "10px 10px 10px 10px" }}>Titulo de formulario</h1>
  );
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        backgroundColor: "#efebe9",
      }}
    >
      {titulo()}
      {formulario()}
      <Listado
        ModificarValorDelistado={ModificarValorDelistado}
        listadoEnMemoria={listadoEnMemoria}
      />
    </div>
  );
};

export default App;
