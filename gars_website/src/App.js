import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CarouselMainPage} from './components/Carousel';
import {NavBarMain} from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
          <div className="App">
      <Switch>
      <NavBarMain />
      <Route to="/">
      <CarouselMainPage />
      </Route>
      {/* <Route to="/">
      <CarouselMainPage />
      </Route>
      <Route to="/">
      <CarouselMainPage />
      </Route>
      <Route to="/">
      <CarouselMainPage />
      </Route> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;

