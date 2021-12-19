import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catalogo } from './pages/Catalogo'
import { Inicio } from './pages/Inicio'


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio /> } />
          <Route path='/inicio' element={<Home />} />
          <Route extac path='/catalogo' element={<Catalogo />} />
          <Route>
            404 Page not found.
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;