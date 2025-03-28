const Collapse = () => {
    return ( 
        <div className="mb-4">
          <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">Mostrar/Ocultar</button>
          <div className="collapse" id="collapseExample">Contenido colapsable</div>
        </div>
    )
}
export default Collapse