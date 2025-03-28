const Carousel = () => {
    return ( 
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
    )
}
export default Carousel