import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Style.css';

const ServicioCard = (props) => {
    return (
        
        <div class="col-12 mb-5 col-md-6 col-sm-12 col-lg-6">
        
    <div class="card flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div class="mask">
                    <div class="align-end">
                    <h1 class="card-title">{props.name}</h1>
                    </div>
                </div>
                <img src={props.img} alt="imagen"/>
            </div>
            <div class="flip-card-back">
                <div class="row no-gutters">
                    <div class="card-body">
                        <h1 class="card-title">{props.title}</h1>
                        <p class="card-text pl-2 mt-2">{props.desc}</p>
                        <button id="botonReserva" class="btn btn-warning">
                            Reservar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
};


export default ServicioCard