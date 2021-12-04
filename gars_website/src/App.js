import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBarMain } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { AboutMe } from './pages/AboutMe';
import { Certifications } from './pages/Certifications';
import { Resume } from './pages/Resume';
import { ContactMe } from './pages/ContactMe';
import { Footer } from './components/Footer';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBarMain />
      </div>
      <Routes>
      <Route path="/" element={Home} />
      <Route path="/aboutMe" element={AboutMe} />
      <Route path="/certifications" element={Certifications} />
      <Route path="/contactMe" element={ContactMe} />
      <Route path="/resume" element={Resume} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

