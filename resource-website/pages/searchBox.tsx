import React from "react";

export const SearchBox:React.FC<search> = ({ placeholder, handleChange }) => (
  <input type="search" placeholder={placeholder} onChange={handleChange} />
);
