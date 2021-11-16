import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import {Login} from "./components/login/index";
import Servicio from "./components/servicios/Servicios"
import Sobre_nosotros from "./components/sobre_nosotros/index"
import Menu from "./pages/Menu"
import ShopState from './context/shop/ShopState';

function App() {
  return (
    <ShopState>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/servicios" component={Servicio} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/sobre_nosotros" component= {Sobre_nosotros} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
    </ShopState>
  );
}

export default App;
