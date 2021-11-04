import React from 'react';
import Header from '../components/includes/header';
import Footer from '../components/includes/footer';
import Carrousel from '../components/includes/carrousel';
import Seccion1 from '../components/includes/seccion_1';
import Seccion2 from '../components/includes/seccion_2';
import Review from '../components/includes/review'

const Home=(props)=>{

    return(
      <>
        <Header/>
        <Carrousel/>
        <Seccion1/>
        <Seccion2/>
        <Review/>
        <Footer/>
      </>
    );
}
export default Home;