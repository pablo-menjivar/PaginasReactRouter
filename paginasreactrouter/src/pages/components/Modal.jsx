const Modal = () => {
    return ( 
        <>
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
        </>
    )
}
export default Modal