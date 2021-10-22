import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu">
          <h1>Menu</h1>
        </Route>
        <Route exact path="/servicios">
          <h1>Menu</h1>
        </Route>
        <Route exact path="/about_us">
          <h1>Menu</h1>
        </Route>
        <Route exact path="/login">
          <h1>Menu</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
