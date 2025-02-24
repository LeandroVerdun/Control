import React, { useState } from "react";

const Tabla = () => {
  const [filas, setFilas] = useState([]);

  const agregarFila = () => {
    setFilas([...filas, { gusto: "", relleno: "", tapas: "", lote: "" }]);
  };

  const handleChange = (index, field, value) => {
    const nuevasFilas = [...filas];
    if (field === "lote" && value < 0) return;
    nuevasFilas[index][field] = value;
    setFilas(nuevasFilas);
  };

  return (
    <div>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Gusto</th>
            <th scope="col">Fecha del relleno</th>
            <th scope="col">Fecha de las tapas</th>
            <th scope="col">Lote</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <tr key={index}>
              <td><input type="text" style={{ backgroundColor: "white", color: "black" }} value={fila.gusto} onChange={(e) => handleChange(index, "gusto", e.target.value)} /></td>
              <td><input type="date" style={{ backgroundColor: "white", color: "black" }} value={fila.relleno} onChange={(e) => handleChange(index, "relleno", e.target.value)} /></td>
              <td><input type="date" style={{ backgroundColor: "white", color: "black" }} value={fila.tapas} onChange={(e) => handleChange(index, "tapas", e.target.value)} /></td>
              <td><input type="number" style={{ backgroundColor: "white", color: "black" }} value={fila.lote} onChange={(e) => handleChange(index, "lote", e.target.value)} min="0" /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={agregarFila} className="btn btn-primary mt-2">Agregar Fila</button>
    </div>
  );
};

export default Tabla;
