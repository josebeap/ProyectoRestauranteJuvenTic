import React from 'react';
import './styles/style2.css'
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () =>{
    
    return(

      <footer className="footer-area bg-f">
            <div className="container">
                <div className="row justify-content-md-center">
                <div className="col-lg-3 col-md-6">
                    <h3>Información de Contacto</h3>
                    <p className="lead">Calle 34A #15-11, Bogotá, Colombia</p>
                    <p className="lead">225 869 123</p>
                    <p className="lead">infofw@admin.com</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h3>Horario de Atención</h3>
                    <p><span className="text-color">Lunes: </span>12PM-10PM</p>
                    <p><span className="text-color">Martes-Miercoles :</span> 9AM - 10PM</p>
                    <p><span className="text-color">Jueves-Viernes :</span> 9AM - 10PM</p>
                    <p><span className="text-color">Sabado-Domingo :</span> 5PM - 10PM</p>
                </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <p className="company-name">All Rights Reserved. © 2021 Food World Design By: Jhonatan, Miguel y Jose</p> 
                        </div>
                    </div>
                </div>
            </div>
      </footer>


    )
}

export default Footer