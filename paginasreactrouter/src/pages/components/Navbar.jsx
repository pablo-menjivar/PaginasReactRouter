const NavBar =() => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Barra de navegación</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Características</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Precios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Deshabilitado</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}
export default NavBar