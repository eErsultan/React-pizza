import React from "react";
import classnames from "classnames";

function SizePizza({ size, clickSize, sizeActive, sizes }) {
  return (
    <li
      onClick={() => clickSize(size.size)}
      className={classnames({
        active: sizeActive === size.size,
        disabled: !sizes.includes(size.size),
      })}
    >
      {size.size}
    </li>
  );
}

export default SizePizza;
