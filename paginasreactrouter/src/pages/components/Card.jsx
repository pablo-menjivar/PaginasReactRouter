const Card = () => {
    const estilos = {
      cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
      },
      cardText: {
        fontSize: '1rem',
      }
    }
    return (
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
    )
}
export default Card