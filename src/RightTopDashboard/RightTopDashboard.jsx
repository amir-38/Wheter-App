// import React, { useState } from "react";
// import "./RightTopDashboard.css";
// import NumberDisplay from "./TemperatureColor/TemperatureColor";
// // import WeatherForm from "../RightBottomDashborad/WeatherForm/WeatherForm";
// // import Sun from "../../src/assets/sun.png";
// //метка1
// function getWeatherIcon(main) {
//   switch (main) {
//     case "clear sky":
//       return "../../src/assets/clearSky.png"; // Путь к иконке облачно
//     case "Rain":
//       return "../../src/assets/night.png"; // Путь к иконке дождь
//     case "Snow":
//       return "../../src/assets/cloud.png"; // Путь к иконке солнечно
//     // Добавьте другие условия по мере необходимости
//     default:
//       return "../../src/assets/cloudy sun.png"; // Путь к стандартной иконке
//   }
// }
// //метка2
// function RightTopDashboard() {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const apiKey = "430b827663bab535d8f10ae3c60d78af";

//   const fetchData = () => {
//     if (city === "") {
//       return;
//     }

//     setLoading(true);

//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData(data);
//         console.log(data);
//         setLoading(false);
//         setCity("");
//       })
//       .catch((error) => {
//         console.error("Ошибка:", error);
//         setLoading(false);
//       });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//   };
//   //change bkg
//   // function getBackgroundClass(temp) {
//   //   if (temp <= -15) {
//   //     return "veryCold";
//   //   } else if (temp > -15 && temp <= 0) {
//   //     return "cold";
//   //   } else if (temp > 0 && temp <= 17) {
//   //     return "normal";
//   //   } else if (temp > 17 && temp <= 32) {
//   //     return "hot";
//   //   } else {
//   //     return "veryHot";
//   //   }
//   // }
//   //метка3
//   //convert m/s to km/h
//   function msToKmh(speedInMs) {
//     return (speedInMs * 3600) / 1000;
//   }
//   const speedMs = weatherData && weatherData.wind ? weatherData.wind.speed : 0;
//   const speedKmh = msToKmh(speedMs);
//   //
//   return (
//     <>
//       <div className="mainContainer">
//         <div className="flexCont">
//           // метка4
//           <form onSubmit={handleFormSubmit}>
//             <label>
//               City:
//               <input
//                 type="text"
//                 value={city}
//                 onChange={handleCityChange}
//                 placeholder="Введите город"
//               />
//             </label>

//             <button type="submit">Search</button>
//           </form>
//           //метка5
//           {loading && <div>Loading...</div>}
//           {weatherData && (
//             <div>
//               <NumberDisplay number={weatherData.main.temp} />
//               <img
//                 className="icons"
//                 src={getWeatherIcon(weatherData.weather[0].description)}
//                 alt="Weather icon"
//               />
//               <h2>Weather in {weatherData.name}</h2>
//               <p> {weatherData.weather[0].main}</p>
//               <p>Humidity:{weatherData.main.humidity}%</p>
//               <p>
//                 Скорость ветра: {msToKmh(weatherData.wind.speed).toFixed(2)}{" "}
//                 км/ч
//               </p>{" "}
//             </div>
//           )}
//           {!loading && !weatherData && city !== "" && (
//             <div>Погода не найдена для города {city}.</div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default RightTopDashboard;

// RightTopDashboard.js
import React from "react";
import "./RightTopDashboard.css";
import NumberDisplay from "./TemperatureColor/TemperatureColor";

function RightTopDashboard({ weatherData, loading, getWeatherIcon, msToKmh }) {
  return (
    <div className="mainContainer">
      <div className="flexCont">
        {loading && <div>Loading...</div>}
        {weatherData && (
          <div className="weatherInfo">
            <div className="weatherInfoText">
              <h2>Weather in {weatherData.name}</h2>
              <p> {weatherData.weather[0].main}</p>
              <p>Humidity: {weatherData.main.humidity}%</p>
              <p>
                Speed: {msToKmh(weatherData.wind.speed).toFixed(2)} km/h
              </p>{" "}
            </div>
            <NumberDisplay number={Math.round(weatherData.main.temp)} />
            <div className="imgContainer">
              <img
                className="icons"
                src={getWeatherIcon(weatherData.weather[0].main)}
                alt="Weather icon"
              />
            </div>
          </div>
        )}
        {/* {!loading && !weatherData !== "" && <div>Погода не найдена </div>} */}
      </div>
    </div>
  );
}

export default RightTopDashboard;
