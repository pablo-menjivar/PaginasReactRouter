import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-danger navbar-dark shadow-sm py-3">
      <div className="container px-4">
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="navbar-brand fw-bold fs-5 mb-0">5 páginas 20200135</span>
          <ul className="d-flex list-unstyled mb-0">
            <li className="ms-3">
              <a href="/" className="text-white fw-semibold text-decoration-none hover-opacity">20 componentes</a>
            </li>
            <li className="ms-3">
              <a href="/informacionpersonal" className="text-white fw-semibold text-decoration-none hover-opacity">Información Personal</a>
            </li>
            <li className="ms-3">
              <a href="/calculadora" className="text-white fw-semibold text-decoration-none hover-opacity">Calculadora</a>
            </li>
            <li className="ms-3">
              <a href="/todolist" className="text-white fw-semibold text-decoration-none hover-opacity">Todo List</a>
            </li>
            <li className="ms-3">
              <a href="/formularioestudiantes" className="text-white fw-semibold text-decoration-none hover-opacity">Formulario estudiantes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav