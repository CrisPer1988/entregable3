import React from "react";
import "./styles/suggestions.css";

const Suggestions = ({ locationList, setNumberLocation, setInputValue }) => {
  return (
    <div className="dropdown">
      {locationList?.slice(0, 10).map((loc) => (
        <li
          className="dropdown-row"
          key={loc.id}
          onClick={() => {
            setNumberLocation(loc.id);
            setInputValue("");
          }}
        >
          {loc.name}
        </li>
      ))}
    </div>
  );
};

export default Suggestions;

/* 
<div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.includes(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <p key={item.full_name} onClick={() => onSearch(item.full_name)}>
                {item.full_name}{" "}
              </p>
            ))}
        </div> 
*/
