const Dropwdown = () => {
    return ( 
        <div className="dropdown mb-4">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Opción 1</a></li>
            <li><a className="dropdown-item" href="#">Opción 2</a></li>
          </ul>
        </div>
    )
}
export default Dropwdown