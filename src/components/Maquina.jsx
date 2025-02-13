import React, { useState, useEffect } from "react";

const Maquina = () => {
  const [datos, setDatos] = useState([{ gusto: "", canastos: null, excedente: null }]);
  const [totalCalculado, setTotalCalculado] = useState(0);

  // Manejar cambios en los inputs
  const handleChange = (index, field, value) => {
    const nuevosDatos = [...datos];
    if (field === "gusto") {
      nuevosDatos[index][field] = value;
    } else {
      nuevosDatos[index][field] = value === "" ? null : Number(value);
    }
    setDatos(nuevosDatos);
  };

  // Calcular la sumatoria de (canastos * 30) + excedente
  useEffect(() => {
    const total = datos.reduce((acc, fila) => {
      const canastosMultiplicados = (fila.canastos || 0) * 30;
      const excedente = fila.excedente || 0;
      return acc + canastosMultiplicados + excedente;
    }, 0);
    
    setTotalCalculado(total);
  }, [datos]);

  // Agregar una nueva fila dentro del tbody
  const agregarFila = () => {
    setDatos([...datos, { gusto: "", canastos: null, excedente: null }]);
  };

  return (
    <div className="container mt-3">
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Gusto</th>
            <th scope="col">Canastos</th>
            <th scope="col">Excedente</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={fila.gusto}
                  onChange={(e) => handleChange(index, "gusto", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={fila.canastos === null ? "" : fila.canastos}
                  onChange={(e) => handleChange(index, "canastos", e.target.value)}
                  min="0"
                  placeholder="Ingrese un número"
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  value={fila.excedente === null ? "" : fila.excedente}
                  onChange={(e) => handleChange(index, "excedente", e.target.value)}
                  min="0"
                  placeholder="Ingrese un número"
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <button className="btn btn-primary w-100" onClick={agregarFila}>
                Agregar gusto
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Input para mostrar el resultado final */}
      <div className="mt-3">
        <label className="fw-bold">Total:</label>
        <input type="number" className="form-control text-center" value={totalCalculado} readOnly />
      </div>
    </div>
  );
};

export default Maquina;
