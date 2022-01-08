import React from 'react';
import './App.css';
import { SearchWeather } from './component/Search';
import { Weather } from './component/Weather';

function App() {

  // const [data, setData] = useState([]);

  // let apiKey = '750f844a271e6a0e4d5caf0107a40189'

  // let url = 'api.openweathermap.org/data/2.5/weather?q='+{cityName}+'&appid='+{apiKey};

  // useEffect(()=>{
  //   fetch(url)
  //   .then((response)=>{
  //     return response.json()
  //   })
  //   .then((setData) =>{
  //     JSON.stringify(setData)
  //     console.log('data', data)
  //     console.log('setData', setData)
  //   })
  // })
  return (
    <div className="App">
      <h1>The Super Awesome <br/> Weather App</h1>
      <SearchWeather />
      <Weather />
    </div>
  );
}

export default App;
