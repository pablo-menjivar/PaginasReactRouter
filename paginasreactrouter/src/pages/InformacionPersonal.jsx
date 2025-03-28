import React from "react"

const ProfileCard = () => {
    return (
        <div className="card mb-3 shadow" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img 
                src="https://i.ibb.co/3Ydm7PdG/Multimedia.jpg"
                className="img-fluid rounded-start h-100" 
                alt="Foto de perfil"
                style={{ objectFit: 'cover' }}
              />
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
                    +1 234 567 890
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-globe me-2"></i>
                    <a href={`https://github.com/pablo-menjivar`} className="text-decoration-none">
                      Sitio web
                    </a>
                  </li>
                </ul>
                <div className="mt-3 d-flex gap-2">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
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
    )
}
export default ProfileCard