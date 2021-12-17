import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Catalogo } from './pages/Catalogo';
import {Router, Route, Switch} from 'react-dom-route'
import {Footer} from '../components/footer'
import {NavbarMain} from '../components/navbar'


function App() {

  return (
    <Router>
      <div className="App">
        <NavbarMain sticky="top"/>
      </div>
      <Switch>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/catalogo" >
          <Catalogo/>
        </Route>
        <Route>
          404 Page not found.
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;