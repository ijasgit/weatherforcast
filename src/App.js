import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import { weatherApiKey, weatherApiURl } from "./api";
import { useState } from "react";
import Forcast from "./components/Forcast";

function App() {
  const [weather, setweather] = useState(null);
  const [forcast, setforcast] = useState(null);
  const [cond, setcond] = useState(false);

  function handleOnSearchChange(result) {
    console.log("result", result);
    const [lat, lon] = result.value.split(",");
    console.log("lat", lat);
    console.log("lon", lon);

    const currentWeather = fetch(
      `${weatherApiURl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    const forcastWeather = fetch(
      `${weatherApiURl}/forecast?id=524901&lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );
    Promise.all([currentWeather, forcastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setforcast(forcastResponse);
        setweather(weatherResponse);
        setcond(true)
      })
      .catch((err) => console.log(err));

      console.log("newdata",forcast,weather)
  }
  return (
    <div className="app">
      <Search onSearchChange={handleOnSearchChange} />
     {cond?<CurrentWeather data={[weather,forcast]} />:null} 
     {cond?<Forcast data={[weather,forcast]} />:null} 

    </div>
  );
}

export default App;
