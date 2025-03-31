import React, { useState } from 'react'

const Calculadora = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [resultado, setResultado] = useState(null)

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2)
        setResultado(suma);
    };
    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2)
        setResultado(resta);
    };
    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2)
        setResultado(multiplicacion)
    };
    const handleDividir = () => {
        if (parseFloat(num2) !== 0) {
            const division = parseFloat(num1) / parseFloat(num2)
            setResultado(division)
        } else {
            setResultado('Error: División por cero')
        }
    };
    const handleLimpiarCampos = () => {
        setNum1('')
        setNum2('')
        setResultado(null)
    };

    return (
        <div style={{
            backgroundColor: '#242424',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
            <div className="calculadora">
                <style>
                    {`
                    .calculadora {
                        display: flex;
                        text-align: center;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        max-width: 400px;
                        padding: 2rem;
                        background-color: #333;
                        border-radius: 15px;
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                    }
                    .calculadora h1 {
                        margin-bottom: 25px;
                        font-size: 2rem;
                        color: #fff;
                    }
                    .calculadora input {
                        width: 100%;
                        padding: 12px 15px;
                        margin-bottom: 20px;
                        font-size: 1.1rem;
                        border: 2px solid #444;
                        border-radius: 8px;
                        box-sizing: border-box;
                        background-color: #222;
                        color: #fff;
                        font-weight: bold;
                    }
                    .calculadora input:focus {
                        outline: none;
                        border-color: #ff4444;
                    }
                    .botones-operaciones {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 12px;
                        width: 100%;
                        margin-bottom: 20px;
                    }
                    .calculadora button {
                        padding: 12px 0;
                        font-size: 1.1rem;
                        color: #fff;
                        background-color: #ff4444;
                        border: none;
                        border-radius: 8px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .boton-limpiar {
                        width: 100%;
                        margin-top: 10px;
                    }
                    .calculadora button:hover {
                        background-color: #ff0000;
                        transform: translateY(-2px);
                    }
                    .calculadora button:active {
                        transform: translateY(0);
                    }
                    .calculadora p {
                        margin-top: 20px;
                        font-size: 2.2rem;
                        color: #fff;
                        font-weight: bold;
                        min-height: 50px;
                    }
                    `}
                </style>
                <h1>Calculadora</h1>
                <input 
                    type="number" 
                    placeholder="Ingresa un número..." 
                    value={num1} 
                    onChange={(e) => setNum1(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Ingresa otro número..." 
                    value={num2} 
                    onChange={(e) => setNum2(e.target.value)}
                />
                <div className="botones-operaciones">
                    <button onClick={handleSumar}>Sumar</button>
                    <button onClick={handleRestar}>Restar</button>
                    <button onClick={handleMultiplicar}>Multiplicar</button>
                    <button onClick={handleDividir}>Dividir</button>
                </div>
                <button className="boton-limpiar" onClick={handleLimpiarCampos}>Limpiar campos</button>
                {resultado !== null && <p>Resultado: {resultado}</p>}
            </div>
        </div>
    )
}
export default Calculadora