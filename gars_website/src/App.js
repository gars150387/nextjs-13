import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBarMain } from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Certifications } from './pages/Certifications';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBarMain className="navbar sticky-top"/>
      </div>
      <Switch>
        <Route exact path="/home" >
          <Home />
        </Route>
        <Route exact path="/aboutMe" >
          <AboutMe />
        </Route>
        <Route exact path="/certifications" >
          <Certifications />
        </Route>
        <Route exact path="/contact" >
          <Contact/>
        </Route>
        <Route exact path="/resume" >
          <Resume />
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

