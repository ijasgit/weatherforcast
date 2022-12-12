import React from "react";
// import icon from "/home/oem/Desktop/weatherforcast/src/weather-icons/01d.png";
import "../components/forcast.css"

const Forcast = (props) => {
const data = props.data[1].list.slice(0, 7);
  console.log(data);
const weekDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
const today=new Date().getDay()
console.log(today)
const forcastday=weekDays.slice(today,weekDays.length).concat(weekDays.slice(0,today))
console.log( forcastday);
  return (
    <div className="forcastcontainer">
      {data.map((daily, index) => (
        <div className="container" key={index}>
          <div className="topside">
            <div>
              <p>{forcastday[index]}</p>
              <span>{daily.weather[0].description}</span>
            </div>
            <img src={`weather-icons/${daily.weather[0].icon}.png`} alt="image"></img>
          </div>
          <div className="bottomside">
          <div className="temp">
            <p>{Math.round(daily.main.temp)}C</p>
            </div>
            <div className="description">
          <div>
            <span>Details</span>
          </div>
          <div className="params">
            <span>Feels like</span>
            <span>{Math.round(props.data[0].main.feels_like)}C</span>
          </div>
          <div className="params">
            <span>Max-temp</span>
            <span>{Math.round(props.data[0].main.temp_max)}C</span>
          </div>
          <div className="params">
            <span>Min-temp</span>
            <span>{Math.round(props.data[0].main.temp_min)}C</span>
          </div>
          <div className="params">
            <span>Humidity</span>
            <span>{Math.round(props.data[0].main.humidity)}C</span>
          </div>
        </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forcast;
