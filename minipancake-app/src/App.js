import './App.css';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Ingridients } from './components/Ingridients';
import { Navbar } from './components/Navbar';
import { NavbarSocialMedia } from './components/NavbarSocialMedia';
import './style/style.css'

function App() {
  return (
    <div className="App">
      <section className='a'>
        <Navbar />
      </section>
      <section className='b'>
        <NavbarSocialMedia />
      </section>
      <section className='c'>
        <Header />
      </section>
      <section className='d'>
        <Ingridients />
      </section>
      <section className='e'>
        <Gallery />
      </section>
      <section className='f'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
