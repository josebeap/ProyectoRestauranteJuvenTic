import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
//import {Login} from "./components/login/login";
//import {Logout} from "./components/login/logout";
import Perfil from "./components/login/profile";
import Servicio from "./components/servicios/Servicios"
import Sobre_nosotros from "./components/sobre_nosotros/index"
//import Menu from "./pages/Menu"
import Menu from "./components/Menu/indexMenu"
import Cart from './components/carrito/indexCarrito';

//<Route exact path="/login" component={Login} />
//<Route exact path="/logout" component={Logout} />

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servicios" component={Servicio} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/carrito" component= {Cart} />
        <Route exact path="/sobre_nosotros" component= {Sobre_nosotros} />
        
        <Route exact path="/perfil" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
