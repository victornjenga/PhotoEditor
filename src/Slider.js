import React from "react";

const Slider = ({ min, max, value, handleChange, name }) => {
  return (
    <div className="slider-container">
      <h2 className="text-3xl text-green-600">{name}</h2>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
