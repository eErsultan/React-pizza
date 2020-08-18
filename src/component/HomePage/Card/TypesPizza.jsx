import React from "react";
import classnames from "classnames";

function TypesPizza({ types, clickType, typeActive, type, index }) {
  return (
    <li
      onClick={() => clickType(index)}
      className={classnames({
        active: typeActive === index,
        disabled: !type.includes(index),
      })}
    >
      {types.text}
    </li>
  );
}

export default TypesPizza;
