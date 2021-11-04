import React from 'react';
import Footer from '../includes/footer';
import Header from '../includes/header';
import Presentacion from "./presentacion"
import Equipo from "./equipo"
import Testimonios from "./testimonios"

const sobre_nosotros=(props)=>{

    return(
      <>
        <Header/>
        <h1 class="text-center">Sobre Nosotros</h1>
        <hr/>
        <Presentacion/>
        <Equipo/>
        <Testimonios/>
        <Footer/>
      </>
    );
}
export default sobre_nosotros;