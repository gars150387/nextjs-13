import './App.css';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Ingredients } from './components/Ingredients';
import { Navbar } from './components/Navbar';
import { NavbarSocialMedia } from './components/NavbarSocialMedia';
import { Advertisment } from './components/Advertisment';
import './style/style.css'

function App() {
  return (
    <div className="App">
      <section className='nav-main'>
        <Navbar />
      </section>
      <section className='nav-social'>
        <NavbarSocialMedia />
      </section>
      <section id='home' className='header-section'>
        <Header />
      </section>
      <section id='ingredients' className='ingredients-section'>
        <Ingredients />
      </section>
      <section id='gallery' className='gallery-section'>
        <Gallery />
      </section>
      <section id='advertisment' className='advertisment-section'>
        <Advertisment />
      </section>
      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
