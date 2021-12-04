import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBarMain } from "./components/NavBar";
import { BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Certifications } from './pages/Certifications';
import { Resume } from './pages/Resume';
import { ContactMe } from './pages/ContactMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarMain />
      </div>
      <Routes path="/" component={Home} />
      <Routes path="/aboutMe" component={AboutMe} />
      <Routes path="/certifications" component={Certifications} />
      <Routes path="/contactMe" component={ContactMe} />
      <Routes path="/resume" component={Resume} />
    </BrowserRouter>
  );
}

export default App;

