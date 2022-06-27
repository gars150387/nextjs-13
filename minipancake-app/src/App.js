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
        <Ingredients />
      </section>
      <section className='e'>
        <Gallery />
      </section>
      <section>
        <Advertisment />
      </section>
      <section className='f'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
