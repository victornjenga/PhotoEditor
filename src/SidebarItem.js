import React from "react";

const SidebarItem = ({ name, active, handleClick }) => {
  return (
    <div
      className={` ${
        active ? "active" : ""
      }  flex active:bg-blue-700 px-4 text-center   hover:bg-gray-500 duration-300 hover:text-white `}
      onClick={handleClick}
    >
      <button>{name}</button>
    </div>
  );
};

export default SidebarItem;
