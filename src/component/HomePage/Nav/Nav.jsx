import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";
import { useDispatch } from "react-redux";

import Navbar from "./Navbar";
import PopupSelect from "./PopupSelect";
import { setCategory, setSortBy } from "../../../redux/actions/filter";

const nav = [
  { item: "Все", id: 1 },
  { item: "Мясные", id: 2 },
  { item: "Вегетарианская", id: 3 },
  { item: "Гриль", id: 4 },
  { item: "Острые", id: 5 },
  { item: "Закрытые", id: 6 },
];

const select = [
  { option: "популярности", id: 1, type: "rating" },
  { option: "по цене", id: 2, type: "price" },
  { option: "по алфавиту", id: 3, type: "pizzaName" },
];

const Nav = React.memo(function Nav({ category, sortBy }) {
  const [selectPopup, setSelectPopup] = useState(false);
  const [option, setOption] = useState("популярности");
  const sorting = useRef();
  const dispatch = useDispatch();

  const onSelectCategory = (id) => {
    dispatch(setCategory(id));
  };

  const onSetSortBy = (option) => {
    setOption(option.option);
    dispatch(setSortBy(option.type));
    setSelectPopup(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sorting.current)) {
      setSelectPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav>
      <ul className="navbar">
        {nav.map((item) => (
          <Navbar
            key={item.id}
            item={item}
            active={category}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </ul>
      <div className="sorting" ref={sorting}>
        <i className={classnames("icon", { bottom: selectPopup })}></i>
        <span>Сортировка по:</span>
        <div className="sorting__select">
          <div
            className="selected"
            onClick={() => setSelectPopup(!selectPopup)}
          >
            {option}
          </div>
          {selectPopup && (
            <div className="options_container">
              {select.map((option) => (
                <PopupSelect
                  key={option.id}
                  option={option}
                  onSetSortBy={onSetSortBy}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
});

export default Nav;
