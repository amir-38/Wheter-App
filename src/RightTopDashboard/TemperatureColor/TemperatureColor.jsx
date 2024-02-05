import React from "react";

const NumberDisplay = ({ number }) => {
  const interpolateColor = (color1, color2, factor) => {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
  };

  const calculateColor = (number) => {
    const blue = [0, 0, 255]; // -50
    const white = [255, 255, 255]; // 0
    const yellow = [255, 255, 0]; // 22
    const red = [255, 0, 0]; // 50

    if (number <= 0) {
      return interpolateColor(blue, white, (number + 50) / 50);
    } else if (number <= 22) {
      return interpolateColor(white, yellow, number / 22);
    } else {
      return interpolateColor(yellow, red, (number - 22) / (50 - 22));
    }
  };

  const style = {
    color: calculateColor(number),
    padding: "10px",
    textAlign: "center",
    margin: "10px",
    width: "fit-content",
  };

  return <h1 style={style}>{number}</h1>;
};

export default NumberDisplay;
