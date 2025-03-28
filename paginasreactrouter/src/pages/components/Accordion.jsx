const Accordion = () => {
    return ( 
        <div className="accordion mb-4">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">Acordeón</button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">Contenido del acordeón</div>
            </div>
          </div>
        </div>
    )
}
export default Accordion