import React from "react";

const NumberDisplay = ({ number }) => {
  // Функция для интерполяции между двумя цветами
  const interpolateColor = (color1, color2, factor) => {
    let result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
  };

  // Функция для расчета цвета на основе числа
  const calculateColor = (number) => {
    const blue = [0, 0, 255]; // -50
    const white = [255, 255, 255]; // 0
    const yellow = [255, 255, 0]; // 22
    const red = [255, 0, 0]; // 50

    if (number <= 0) {
      // Интерполируем между синим и белым
      return interpolateColor(blue, white, (number + 50) / 50);
    } else if (number <= 22) {
      // Интерполируем между белым и желтым
      return interpolateColor(white, yellow, number / 22);
    } else {
      // Интерполируем между желтым и красным
      return interpolateColor(yellow, red, (number - 22) / (50 - 22));
    }
  };

  // Стили для числа
  const style = {
    color: calculateColor(number),
    padding: "10px",
    //  fontSize: "24px",
    textAlign: "center",
    //  border: "1px solid #ccc",
    margin: "10px",
    width: "fit-content",
  };

  return <h1 style={style}>{number}</h1>;
};

export default NumberDisplay;
