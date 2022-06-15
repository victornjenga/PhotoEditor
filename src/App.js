import React, { useState } from "react";
import "./index.css";
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";
import image from "./Images/IMG-20220303-WA0016.jpg";
// Dark Mode

const DEFAULTS_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 100,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 100,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
function App() {
  const [options, setOptions] = useState(DEFAULTS_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];
  const [selectedImage, setSelectedImage] = useState(null);

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  }

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  const download = () => {
    var element = document.createElement("a");
    var file = new Blob([selectedImage], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };
  return (
    <>
      <div className=" bg-black justify-center items-center text-center text-white h-[600px] block">
        {" "}
        {selectedImage ? (
          <h1 className=" top-0 mt-10 text-3xl font-bold text-yellow-600">
            Enjoy The Coolest Editing Ever
          </h1>
        ) : (
          <h1 className="top-0 mt-10 text-3xl font-bold text-yellow-600">
            Upload and Edit Your Image Now
          </h1>
        )}
        {selectedImage ? (
          <div className="flex justify-center items-center ">
            <img
              style={getImageStyle()}
              alt="not found"
              className="h-[300px] w-[300px] bg-no-repeat  "
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
          </div>
        ) : (
          <div className="flex h-[300px] w-[300px] justify-center  items-center ">
            <br />
          </div>
        )}
        <div className=" overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
          <div className="flex  justify-center text-center items-center ">
            {options.map((option, index) => {
              return (
                <SidebarItem
                  name={option.name}
                  key={index}
                  active={index === selectedOptionIndex}
                  handleClick={() => setSelectedOptionIndex(index)}
                />
              );
            })}
          </div>
        </div>
        <div className="block  justify-center items-center text-center">
          <br />
          <br />
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          {selectedImage && (
            <button
              onClick={() => setSelectedImage(null)}
              className="bg-yellow-600 px-3 py-2 text-black font-bold rounded-xl"
            >
              Remove
            </button>
          )}
          <div className="mt-10 w-auto">
            <Slider
              min={selectedOption.range.min}
              max={selectedOption.range.max}
              value={selectedOption.value}
              handleChange={handleSliderChange}
            />
          </div>{" "}
          <div className="">
            {selectedImage && (
              <button className="bg-yellow-600 px-3 py-2 font-bold rounded-xl text-black">
                <a
                  href={selectedImage.DEFAULTS_OPTIONS}
                  download
                  onClick={() => download()}
                >
                  Download
                </a>
              </button>
            )}
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default App;
