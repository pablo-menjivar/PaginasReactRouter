const Toast = () => {
    return ( 
        <div className="toast mb-4">
          <div className="toast-header">
            <strong className="me-auto">Notificación</strong>
            <button className="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div className="toast-body">¡Este es un toast!</div>
        </div>
    )
}
export default Toast