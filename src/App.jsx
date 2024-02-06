// import "./App.css";
// import LeftDash from "./LeftDashboard/LeftDashboard";
// import RightBottomDashboard from "./RightBottomDashborad/RightBottomDashboard";
// import RightTopDashboard from "./RightTopDashboard/RightTopDashboard";
// function App() {
//   return (
//     <>
//       <div className="leftContainer">
//         <LeftDash />
//       </div>

//       <div className="rightContainer">
//         <RightTopDashboard />
//         <RightBottomDashboard />
//       </div>
//     </>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
// import "./RightTopDashboard.css";
import "./App.css";
import RightTopDashboard from "./RightTopDashboard/RightTopDashboard";
import LeftDash from "./LeftDashboard/LeftDashboard";
import RightBottomDashboard from "./RightBottomDashborad/RightBottomDashboard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiKey = "430b827663bab535d8f10ae3c60d78af";

  function getWeatherIcon(main) {
    switch (main) {
      case "Clear":
        return "../../src/assets/clearSky.png";
      case "rain":
        return "../../src/assets/night.png";
      case "Clouds":
        return "../../src/assets/cloud.png";
      default:
        return "../../src/assets/cloud.png";
    }
  }

  function fetchData() {
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
        console.log(weatherData.weather[0].description);
        setLoading(false);
        setCity("");
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        setLoading(false);
      });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetchData();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function msToKmh(speedInMs) {
    return (speedInMs * 3600) / 1000;
  }

  return (
    <>
      <div className="leftContainer">
        <LeftDash
          city={city}
          handleFormSubmit={handleFormSubmit}
          handleCityChange={handleCityChange}
        />
      </div>

      <div className="rightContainer">
        {" "}
        <RightTopDashboard
          weatherData={weatherData}
          loading={loading}
          getWeatherIcon={getWeatherIcon}
          msToKmh={msToKmh}
        />
        <RightBottomDashboard />
      </div>
    </>
  );
}

export default App;
