import React, { useState, useEffect } from "react";
import data from '../../data/serviciosJson'
import Footer from '../includes/footer';
import HeaderSimple from '../HeaderSimple';
import ServicioCard from './CardServicio';
import FormRegistro from "./Formulario";
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {CircularProgress} from "@material-ui/core"
import './StyleService.css';

/*<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>*/ 

const Servicio = () => {
  const url = "http://localhost:33144/api/servicio";
  const [serviciosItems, setServiciosItems] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setServiciosItems(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
    return (
      <>
        <HeaderSimple />
        <h1 class="text-center">Servicios</h1>
        <hr/>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {!serviciosItems ? <div style={{marginBottom:'5vh'}}><CircularProgress/></div>:
            serviciosItems.map((item) => {
              return (<ServicioCard img={item.img} title={item.titulo} name={item.titulo} 
                desc={item.descripcion} />)
            })}
          </div>
        </section>
        <FormRegistro />
        <Footer />
      </>
    );
  }
  export default Servicio;