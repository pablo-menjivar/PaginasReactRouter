import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const clearTodos = () => {
        setTodos([]);
    };

    const clearOne = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
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
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '500px',
                padding: '2rem',
                backgroundColor: '#333',
                borderRadius: '15px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                color: 'white'
            }}>
                <h1 style={{ 
                    marginBottom: '25px', 
                    fontSize: '2rem', 
                    textAlign: 'center' 
                }}>
                    Todo List
                </h1>
                
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '20px'
                }}>
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Añadir una nueva tarea..."
                        style={{
                            flex: 3, 
                            padding: '10px 15px', 
                            fontSize: '1rem',
                            border: '2px solid #444',
                            borderRadius: '8px',
                            background: '#222',
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    />
                    <button 
                        onClick={addTodo}
                        style={{
                            flex: 1, 
                            padding: '10px', 
                            fontSize: '1rem',
                            background: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            minWidth: '100px' 
                        }}
                    >
                        Añadir
                    </button>
                </div>

                <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    marginBottom: '20px'
                }}>
                    {todos.map((todo) => (
                        <li 
                            key={todo.id} 
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px 15px', 
                                border: '2px solid #444',
                                borderRadius: '8px',
                                marginBottom: '10px',
                                background: '#222'
                            }}
                        >
                            <span 
                                onClick={() => toggleComplete(todo.id)}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#6c757d' : 'white',
                                    cursor: 'pointer',
                                    flex: 1,
                                    fontSize: '0.95rem'  
                                }}
                            >
                                {todo.text}
                            </span>
                            <button 
                                onClick={() => clearOne(todo.id)}
                                style={{
                                    background: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '5px 10px', 
                                    cursor: 'pointer',
                                    marginLeft: '10px',
                                    fontWeight: 'bold',
                                    fontSize: '0.85rem'
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>

                {todos.length > 0 && (
                    <button 
                        onClick={clearTodos}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '1rem',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Limpiar todas las tareas
                    </button>
                )}
            </div>
        </div>
    );
};
export default Todo