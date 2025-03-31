import React from 'react'
function Componentes() {
  const estilos = {
    cardTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    cardText: {
      fontSize: '1rem',
    },
    rootStyles: {
      textAlign: 'center'
    },
    h1Styles: {
      fontSize: '3.2em',
      lineHeight: '1.1'
    }
  }
  return (
    <>
    <div style={estilos.rootStyles}>
      <h1 class="text-center my 4" style={estilos.h1Styles}>20 componentes de Bootstrap</h1>
      <div className="container align-items-center">
        <h3 class="text-center my 4">1. Barra de navegación</h3>
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
        <h3 class="text-center my 4">2. Botones de diferentes colores</h3>
        <div className="mb-4">
          <button className="btn btn-primary me-2">Primario</button>
          <button className="btn btn-success me-2">Éxito</button>
          <button className="btn btn-danger me-2">Peligro</button>
        </div>
        <h3 class="text-center my 4">3. Alerta de Bootstrap</h3>
        <div className="alert alert-warning alert-dismissible fade show mb-4" role="alert">
          ¡Esta es un alerta de Bootstrap!
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        </div>
        <h3 class="text-center my 4">4. Card de Bootstrap</h3>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title" style={estilos.cardTitle}>
              Título de la card
            </h5>
            <p className="card-text" style={estilos.cardText}>
              Esta es una tarjeta de ejemplo que muestra información básica. Se puede utilizar para presentar productos, noticias, perfiles de usuario o cualquier otro tipo de contenido.
            </p>
          </div>
        </div>
        <h3 class="text-center my 4">5. Formulario de Bootstrap</h3>
        <form className="mb-4">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="correo@ejemplo.com" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="phone" placeholder="+1234567890" pattern="[0-9]{9,12}"/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Escribe tu mensaje aquí"></textarea>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terms" required/>
                <label className="form-check-label" htmlFor="terms">Acepto los términos y condiciones</label>
            </div>
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button type="reset" className="btn btn-secondary">Limpiar</button>
            </div>
        </form>
        <h3 class="text-center my 4">6. Lista no ordenada de Bootstrap</h3>
        <ul className="list-group mb-4">
          <li className="list-group-item">Primer elemento</li>
          <li className="list-group-item">Segundo elemento</li>
          <li className="list-group-item">Tercer elemento</li>
        </ul>
        <h3 class="text-center my 4">7. Insignias de Bootstrap</h3>
        <div className="mb-4">
          <span className="badge bg-primary me-2">Primary</span>
          <span className="badge bg-success me-2">Success</span>
          <span className="badge bg-danger">Danger</span>
        </div>
        <h3 class="text-center my 4">8. Barra de progreso de Bootstrap</h3>
        <div className="progress mb-4">
          <div className="progress-bar" style={{width: '75%'}}>75%</div>
        </div>
        <h3 class="text-center my 4">9. Spinner de Bootstrap</h3>
        <div className="spinner-border text-primary mb-4"></div>
        <h3 class="text-center my 4">10. Paginación de Bootstrap</h3>
        <nav className="mb-4">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Anterior</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
          </ul>
        </nav>
        <h3 class="text-center my 4">11. Dropdown de Bootstrap</h3>
        <div className="dropdown mb-4">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Opción 1</a></li>
            <li><a className="dropdown-item" href="#">Opción 2</a></li>
          </ul>
        </div>
        <h3 class="text-center my 4">12. Toast de Bootstrap</h3>
        <div className="toast mb-4">
          <div className="toast-header">
            <strong className="me-auto">Notificación</strong>
            <button className="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div className="toast-body">¡Este es un toast!</div>
        </div>
        <h3 class="text-center my 4">13. Contenido colapsable de Bootstrap</h3>
        <div className="mb-4">
          <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">Mostrar/Ocultar</button>
          <div className="collapse" id="collapseExample">Contenido colapsable</div>
        </div>
        <h3 class="text-center my 4">14. Tooltip de Bootstrap</h3>
        <button className="btn btn-secondary mb-4" data-bs-toggle="tooltip" title="Esto es lo que aparece">Pasa el mouse</button>
        <h3 class="text-center my 4">15. Modal de Bootstrap</h3>
        <button className="btn btn-danger mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Abrir Modal</button>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Título del Modal</h5>
                <button className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">Contenido del modal</div>
            </div>
          </div>
        </div> 
        <h3 class="text-center my 4">16. Breadcrumb de Bootstrap</h3>
        <nav className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Inicio</a></li>
            <li className="breadcrumb-item active">Actual</li>
          </ol>
        </nav>
        <h3 class="text-center my 4">17. Carrusel de Bootstrap</h3>
        <div id="carouselExample" className="carousel slide mb-4">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://stepwaysoftwares.com/img/assets/webdevelopment.png" className="d-block w-100" alt="Web development 1"/>
            </div>
            <div className="carousel-item">
              <img src="https://blog.openreplay.com/images/web-development-best-practices/images/hero.png" className="d-block w-100" alt="Web development 2"/>
            </div>
          </div>
        </div>
        <h3 class="text-center my 4">18. Acordeón de Bootstrap</h3>
        <div className="accordion mb-4">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Acordeón
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                Contenido del acordeón
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-center my 4">19. Form check de Bootstrap</h3>
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox"/>
          <label className="form-check-label">Checkbox ejemplo</label>
        </div>
        <h3 class="text-center my 4">20. Input group de Bootstrap</h3>
        <div className="input-group mb-4">
          <span className="input-group-text">@</span>
          <input type="text" className="form-control" placeholder="Usuario" />
        </div>
      </div>
    </div>
    </>
  )
}
export default Componentes