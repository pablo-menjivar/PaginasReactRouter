import React from 'react'

const InformacionPersonal = () => {
    return (
        <div style={{margin: 0, display: 'flex', justifyContent: 'center',  alignItems: 'center', minHeight: '100vh', width: '100%'}}>
            <div style={{ maxWidth: '1280px', width: '100%', padding: '2rem', textAlign: 'center',  display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{fontSize: '3.2em', lineHeight: '1.1', marginBottom: '2rem'}}>Información personal:</h1>
                <div className="card mb-3 shadow" style={{maxWidth: '540px', width: '100%'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/3Ydm7PdG/Multimedia.jpg" className="img-fluid rounded-start h-100" alt="Foto de perfil" style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Juan Pablo Ayala Menjívar</h5>
                                <p className="card-text text-muted">Estudiante de Desarrollo de Software</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <i className="bi bi-envelope me-2"></i>
                                        citobim43@gmail.com
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-phone me-2"></i>
                                        + 1 234 567 890
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-globe me-2"></i>
                                        <a href={`https://github.com/pablo-menjivar`} className="text-decoration-none">
                                            Mi sitio web
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-3 d-flex gap-2 justify-content-center"> {/* Added justify-content-center */}
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                        <i className="bi bi-linkedin me-2"></i>LinkedIn
                                    </a>
                                    <a href="https://github.com/pablo-menjivar" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">
                                        <i className="bi bi-github me-2"></i>GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InformacionPersonal