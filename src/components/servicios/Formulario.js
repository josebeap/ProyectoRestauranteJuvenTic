import React from "react";
//import ScriptTag from 'react-script-tag';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';

export class FormReserva extends React.Component {
    constructor(props) {
      super(props);
      //<ScriptTag type="text/javascript" src="https://smtpjs.com/v3/smtp.js"/>,
      //<ScriptTag type="text/javascript" src="./envioCorreo.js"/>,
      this.state = {nombre: "", fecha: "", telefono: "", email: "", 
                    descripcion: "", servicio: "", autoriza: "" };
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    valueToState = ({name, value, checked, type}) => {
      this.setState( state => {
        return {[name]: type === "checkbox" ?checked : value};
      })
    }
    handleSubmit(event) {
      alert('A nombre was submitted: ' + this.state.nombre + " " +this.state.descripcion
                                      + " " + this.fecha);
      event.preventDefault();
    }
    render() {
      return (
        <section class="form-content" id="form-content">
        <form onSubmit={this.handleSubmit} id="form">
          <h2>Haz Tu Reserva Ahora!</h2>
          <input type="text" id="nombre" name='nombre' placeholder="Nombre del Cliente" 
                onChange={event => this.valueToState(event.target)}/>
          <input type="date" id="fecha" name='fecha' placeholder="Fecha Reserva" 
                onChange={event => this.valueToState(event.target)}/>
          <input type="number" id="telefono" name='telefono' placeholder="Telefono del Cliente" 
                onChange={event => this.valueToState(event.target)}/>
          <input type="email" id="email" name='email' placeholder="Correo Electronico" 
                onChange={event => this.valueToState(event.target)}/>
          <textarea id="descripcion" name='descripcion' rows="5" placeholder="Descripcion relevante"
                onChange={event => this.valueToState(event.target)}></textarea>
          <input type="text" name="servicio" id="servicio" placeholder="Servicio que deseé" 
                onChange={event => this.valueToState(event.target)}/>
          <label> 
            ¿Autoriza tratamiento Datos?
          <input type="checkbox" id="autoriza" name='autoriza' placeholder="Autoriza" 
                onChange={event => this.valueToState(event.target)}/>
          </label> 
          <button type="submit" class="btn btn-warning">
            ¡Reservar!
          </button>
        </form>
        </section>
        
      );
    }
  }
  export default FormReserva;