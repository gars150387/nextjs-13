import logo from './logo.svg';
import './App.css';
import { Search } from './component/Search';
import { Weather } from './component/Weather';

function App() {
  return (
    <div className="App">
      <h1>The Super Awesome <br/> Weather App</h1>
      <Search />
      <Weather />
    </div>
  );
}

export default App;
