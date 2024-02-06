import React from "react";
import "./LeftDash.css";
function LeftDash({ handleFormSubmit, handleCityChange, city }) {
  return (
    <div className="leftDash">
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
    </div>
  );
}
export default LeftDash;
