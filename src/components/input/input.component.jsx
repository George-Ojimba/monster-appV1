import React from "react";
import "./input.style.css";

export const SearchInput = ({ placeholder, handleChange }) => {
  return (
    <input className="input--field" type="search" placeholder={placeholder} onChange={handleChange} />
  );
};
