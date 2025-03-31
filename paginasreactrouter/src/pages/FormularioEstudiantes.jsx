import { useState } from 'react'

function Form() {
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
    <div style={{
      backgroundColor: '#242424',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <style>
        {`
          @media (prefers-color-scheme: light) {
            .app-container {
              color: #213547;
              background-color: #ffffff;
            }
            .app-container input {
              background-color: #f0f0f0;
              color: #213547;
            }
            .estudiante {
              background-color: #f0f0f0;
              color: #213547;
            }
          }
        `}
      </style>
      
      <div className="app-container" style={{
        backgroundColor: '#1e1e1e',
        padding: '30px',
        borderRadius: '15px',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        color: 'rgba(255, 255, 255, 0.87)'
      }}>
        <h1 style={{
          marginBottom: '20px',
          fontSize: '2rem',
          fontWeight: 'bold',
          lineHeight: '1.1'
        }}>
          Registro de Estudiantes
        </h1>
        
        <form onSubmit={agregarEstudiante} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#d3d3d3',
              fontSize: '1rem',
              outline: 'none',
              color: '#000',
              fontWeight: '500'
            }}
          />
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#d3d3d3',
              fontSize: '1rem',
              outline: 'none',
              color: '#000',
              fontWeight: '500'
            }}
          />
          <input
            type="text"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
            style={{
              padding: '12px',
              border: 'none',
              borderRadius: '8px',
              backgroundColor: '#d3d3d3',
              fontSize: '1rem',
              outline: 'none',
              color: '#000',
              fontWeight: '500'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            Agregar
          </button>
        </form>

        <h2 style={{
          marginTop: '20px',
          marginBottom: '10px',
          fontSize: '1.5rem'
        }}>
          Listado:
        </h2>
        <div style={{ marginTop: '15px' }}>
          {estudiantes.map((est, index) => (
            <div 
              key={index} 
              className="estudiante"
              style={{
                backgroundColor: '#d3d3d3',
                padding: '12px',
                marginTop: '10px',
                borderRadius: '8px',
                color: '#000',
                fontSize: '1rem',
                textAlign: 'left'
              }}
            >
              <strong>Nombre:</strong> {est.nombre} | <strong>Edad:</strong> {est.edad} | <strong>Carnet:</strong> {est.carnet}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Form