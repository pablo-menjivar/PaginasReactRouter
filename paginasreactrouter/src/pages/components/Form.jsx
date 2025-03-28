const Form = () => {
    return ( 
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
    )
}
export default Form