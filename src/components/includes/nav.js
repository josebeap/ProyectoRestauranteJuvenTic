import React from 'react';
import {Link} from 'react-router-dom'

const Navi=(props)=>{

    return(
      <nav>
          <Link to='/'>Inicio</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/servicios'>Services</Link>
          <Link to='/about_us'>About us</Link>
          <Link to='/login'>Login</Link>
      </nav>
    );
}
export default Navi;