import React, { useState } from "react";
import "./RightTopDashboard.css";
import NumberDisplay from "./TemperatureColor/TemperatureColor";
// import Sun from "../../src/assets/sun.png";
function getWeatherIcon(main) {
  switch (main) {
    case "Clouds":
      return "../../src/assets/sun.png"; // Путь к иконке облачно
    case "Rain":
      return "../../src/assets/night.png"; // Путь к иконке дождь
    case "Snow":
      return "../../src/assets/cloud.png"; // Путь к иконке солнечно
    // Добавьте другие условия по мере необходимости
    default:
      return "../../src/assets/cloudy sun.png"; // Путь к стандартной иконке
  }
}
function RightTopDashboard() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = "";

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
        setCity("");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
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
  //change bkg
  function getBackgroundClass(temp) {
    if (temp <= -15) {
      return "veryCold";
    } else if (temp > -15 && temp <= 0) {
      return "cold";
    } else if (temp > 0 && temp <= 17) {
      return "normal";
    } else if (temp > 17 && temp <= 32) {
      return "hot";
    } else {
      return "veryHot";
    }
  }
  //convert m/s to km/h
  function msToKmh(speedInMs) {
    return (speedInMs * 3600) / 1000;
  }

  const speedMs = weatherData && weatherData.wind ? weatherData.wind.speed : 0;
  const speedKmh = msToKmh(speedMs);

  console.log(`${speedMs} m/s is ${speedKmh} km/h`);

  return (
    <>
      <div
        className={`mainContainer ${
          weatherData ? getBackgroundClass(weatherData.main.temp) : ""
        }`}
      >
        <div className="textCont">
          <div className="flexCont">
            <form onSubmit={handleFormSubmit}>
              <label>
                City:
                <input
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                  placeholder="Введите город"
                />
              </label>

              <button type="submit">Search</button>
            </form>
            {loading && <div>Loading...</div>}
            <img
              src=" 
"
              alt=""
            />

            {weatherData && (
              <div>
                <NumberDisplay number={weatherData.main.temp} />
                <img
                  className="icons"
                  src={getWeatherIcon(weatherData.weather[0].main)}
                  alt="Weather icon"
                />
                иконки должны отображатся здесь
                <h2>Weather in {weatherData.name}</h2>
                <p> {weatherData.weather[0].main}</p>
                <p>Humidity:{weatherData.main.humidity}%</p>
                <p>
                  Скорость ветра: {msToKmh(weatherData.wind.speed).toFixed(2)}{" "}
                  км/ч
                </p>{" "}
              </div>
            )}
            {!loading && !weatherData && city !== "" && (
              <div>Погода не найдена для города {city}.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RightTopDashboard;