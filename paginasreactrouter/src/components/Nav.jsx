import React from "react"
const Nav = () => {
    return (
        <nav className="bg-red-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">5 páginas 20200135</div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-200">20 componentes</a></li>
                    <li><a href="/informacionpersonal" className="hover:text-gray-200">Información Personal</a></li>
                    <li><a href="/calculadora" className="hover:text-gray-200">Calculadora</a></li>
                    <li><a href="/todolist" className="hover:text-gray-200">Todo List</a></li>
                    <li><a href="/formularioestudiantes" className="hover:text-gray-200">Formulario estudiantes</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav