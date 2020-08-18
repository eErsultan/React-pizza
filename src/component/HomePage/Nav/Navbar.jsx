import React from "react";

function Navbar({ item, active, onSelectCategory }) {
  return (
    <li
      onClick={() => onSelectCategory(item.id)}
      className={active === item.id ? "active" : null}
    >
      {item.item}
    </li>
  );
}

export default Navbar;
