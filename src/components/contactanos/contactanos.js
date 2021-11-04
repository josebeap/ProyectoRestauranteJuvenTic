import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../includes/footer';
import Header from '../includes/header';

const sobre_nosotros=(props)=>{

    return(
      <>
        <Header/>
        <div class="container mt-3">
          <div class="row">
            <div class="col">
              <h1 class="p-contacto">Contáctanos</h1>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
                <p class="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aut neque harum eum autem obcaecati tenetur unde enim fugiat commodi. 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                    <br><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit vel sint nemo consectetur incidunt! Quidem porro nam velit rerum distinctio! Nobis at explicabo odio ea, aperiam, quos rerum maxime illum ab, consequatur numquam? Eos officiis tenetur perferendis maiores qui.
                </p>
            </div>
            <div class="col">
            <form onSubmit={this.handleSubmit}>
            <select class="form-select form-select-sm mb-2" required>
                  <option selected disabled>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <input class="form-control mb-3" type="text" placeholder="Asunto" required>

                <input class="form-control mb-3" type="text" placeholder="Nombre de contacto" required>

                <input class="form-control" type="email" id="exampleFormControlInput1" placeholder="Correo electrónico" required>

                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Comentarios o solicitudes" required></textarea>

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required/>
                  <label class="form-check-label" for="flexCheckDefault">Acepto terminos & condiciones.</label>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mb-3">
                  <button class="btn btn-primary btn-lg orange-button" id="button-contact" type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>           
        </div>
        <Footer/>
      </>
    );
}
export default sobre_nosotros;