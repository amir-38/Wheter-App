import React, { useState } from "react";
import videoSrc from "../assets/video.mp4";
import "./Hero.css";
function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "430b827663bab535d8f10ae3c60d78af";

  const fetchData = () => {
    if (city === "") {
      return;
    }

    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при запросе погоды:", error);
        setLoading(false);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="videoCont">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          style={{ width: "100%", height: "auto" }}
        >
          {/* Use the imported video source and specify the MIME type */}
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="textCont">
        <div className="flexCont">
          <h2>Погода</h2>
          <form onSubmit={handleFormSubmit}>
            <label>
              Город:
              <input
                type="text"
                value={city}
                onChange={handleCityChange}
                placeholder="Введите город"
              />
            </label>
            <button type="submit">Поиск</button>
          </form>

          {loading && <div>Loading...</div>}

          {weatherData && (
            <div>
              <h2>Погода в {weatherData.name}</h2>
              <p>Температура: {weatherData.main.temp}°C</p>
              <p>Описание: {weatherData.weather[0].description}</p>
            </div>
          )}

          {!loading && !weatherData && city !== "" && (
            <div>Погода не найдена для города {city}.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
