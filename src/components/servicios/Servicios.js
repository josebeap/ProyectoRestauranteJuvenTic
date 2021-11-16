import React from 'react';
import data from '../../data/serviciosJson'
import Footer from '../includes/footer';
import HeaderSimple from '../HeaderSimple';
import ServicioCard from './CardServicio';
import FormRegistro from "./Formulario";
//import './StyleService.css';

const Servicio = () => {

    return (
      <>
        <HeaderSimple />
        <h1 class="text-center">Servicios</h1>
        <hr/>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {data.serviceItems.map((item) => {
              return (<ServicioCard img={item.img} title={item.title} name={item.name} 
                desc={item.desc} />)
            })}
          </div>
        </section>
        <FormRegistro />
        <Footer />
      </>
    );
  }
  export default Servicio;