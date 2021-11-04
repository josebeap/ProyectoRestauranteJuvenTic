import React from 'react';
import {Link} from 'react-router-dom'

const Navi=(props)=>{

    return(
      <nav>
          <Link to='/'>Inicio</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/servicios'>Servicios</Link>
          <Link to='/sobre_nosotros'>Sobre Nosotros</Link>
          <Link to='/login'>Login</Link>
      </nav>
    );
}
export default Navi;