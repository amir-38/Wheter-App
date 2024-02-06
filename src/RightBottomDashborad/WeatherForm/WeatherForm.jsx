import React from "react";

function WeatherForm({ city, onCityChange, onFormSubmit }) {
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={onCityChange}
          placeholder="Введите город"
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default WeatherForm;
