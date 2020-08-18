import React from "react";

function PopupSelect({ option, onSetSortBy }) {
  return (
    <div
      className={`options option-${option.id}`}
      onClick={() => onSetSortBy(option)}
    >
      {option.option}
    </div>
  );
}

export default PopupSelect;
