import React from "react";
import "../components/currentWeather.css";
const CurrentWeather = (props) => {
  console.log("props", props.data);
  return (
    <div className="container">
      <div className="topside">
        <div>
          <h3>{props.data[0].name}</h3>{" "}
          <span>{props.data[0].weather[0].description}</span>
        </div>
        <img
          src={`weather-icons/${props.data[0].weather[0].icon}.png`}
          alt="image"
        ></img>
      </div>
      <div className="bottomside">
        <p>{Math.round(props.data[0].main.temp)}C</p>
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
  );
};

export default CurrentWeather;
