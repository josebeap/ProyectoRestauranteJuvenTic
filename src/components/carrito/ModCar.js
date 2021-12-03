import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ModCar = ({show, handleClose}) => {

  function sendEmail() {
    let nombre = document.getElementById("recipient-name").value;
    let email = document.getElementById("recipient-correo").value;
    
    let carritoItems = document.getElementById("todoCarrito").textContent;

    let mensaje = carritoItems;

    sendEmailCliente(nombre, email, mensaje);
    sendEmailRestaurante(nombre, email, mensaje);

    console.log("Mensaje: ",mensaje)

    alert("Solicitud pedido exitosa");
  }
  function sendEmailCliente(nombre, email, mensaje) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "josebeap11@gmail.com",
      Password: "vvtgsyoewgtiafmg",
      To: email,
      From: "josebeap11@gmail.com",
      Subject: nombre + ", este es tu pedido",
      Body: mensaje
    });
  }
  function sendEmailRestaurante(nombre, email, mensaje) {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "josebeap11@gmail.com",
      Password: "vvtgsyoewgtiafmg",
      To: "jose.1701710903@ucaldas.edu.co",
      From: "josebeap11@gmail.com",
      Subject: nombre + " Ha realizado una compra",
      Body: nombre + "<br>" + email + "<br> " + mensaje
    });
  }



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           Detalles de la compra
        </Modal.Header>
        <Modal.Body>
          <p>Hola! Gracias por confiar en nosotros, aquí tienes los datos de tu pedido.</p>
          {/* <img id="imagen_correo" src="img/lm.png" className="rounded mx-auto d-block" alt="Image" /> */}
          <h5 className="modal-title">Este es tu pedido</h5>
          <hr size={5} style={{ color: '#00b9c7' }} />
          <p id="p1" className="text-center"></p>
          {/* <p id="p2" className="fw-bold text-center"></p> */}

          <form onSubmit={()=>sendEmail()}>
            <br />
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
              <input type="text" className="form-control" id="recipient-name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">Correo:</label>
              <input type="email" className="form-control" id="recipient-correo" required />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button>Aceptar</Button>
          <Button>Cancelar</Button>
        </Modal.Footer> */}
      </Modal>
      
    </>
  );
}

export default ModCar;