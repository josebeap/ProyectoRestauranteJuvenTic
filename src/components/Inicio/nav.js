import React from 'react';
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import { LoginButton } from "../login/login";
import { LogoutButton } from "../login/logout";
import { useAuth0 } from "@auth0/auth0-react";
import './styles/index.css'

const Navi=(props)=>{
  const { isAuthenticated } = useAuth0();
    return(
      <nav className="nav-header">
          <Link to='/'>Inicio</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/servicios'>Servicios</Link>
          <Link to='/sobre_nosotros'>Sobre Nosotros</Link>
          <Link to='/perfil'>Perfil</Link>
          <Link to='/carrito'><FiShoppingCart size='2em'/></Link>
          <Link class="nav-item px-3">
              {isAuthenticated ? (
                <>
                  <LogoutButton />
                </>
              ) : (
                <LoginButton />
              )}
            </Link>
      </nav>
    );
}
export default Navi;