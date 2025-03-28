import { useState } from 'react'
import './Formulario.css'
import React from "react"

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [carnet, setCarnet] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (e) => {
    e.preventDefault();
    if (nombre && edad && carnet) {
      const nuevoEstudiante = { nombre, edad, carnet };
      setEstudiantes([...estudiantes, nuevoEstudiante]);
      setNombre('');
      setEdad('');
      setCarnet('');
    }
  };
  return (
    <>
      <div className="App">
        <h1>Registro de Estudiantes</h1>
        <form onSubmit={agregarEstudiante}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
          <input
            type="text"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>

        <h2>Listado:</h2>
        <div className="listado">
          {estudiantes.map((est, index) => (
            <div key={index} className="estudiante">
              <strong>Nombre:</strong> {est.nombre} | <strong>Edad:</strong> {est.edad} | <strong>Carnet:</strong> {est.carnet}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default Formulario