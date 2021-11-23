import React, { useState, useEffect } from "react";
import Footer from '../includes/footer';
import HeaderSimple from '../HeaderSimple';
import Presentacion from "./presentacion"
import Equipo from "./equipo"
import Testimonios from "./testimonios"
//import Reviw from "../includes/review"
//import Comentarios from "../includes/comentario_principal"
//import SubComentario from "../includes/sub_comentario"

const Sobre_nosotros=()=>{

  const url = "http://localhost:33144/api/empleado";
  const [empleadosItems, setEmpleadosItems] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setEmpleadosItems(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);


    return(
      <>
        <HeaderSimple/>
        <h1 class="text-center">Sobre Nosotros</h1>
        <hr/>
        <Presentacion/>
        <Equipo empleadosItems={empleadosItems}/>
        <Testimonios/>
        <Footer/>
      </>
    );
}
export default Sobre_nosotros;