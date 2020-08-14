import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Header.module.scss";
import classNames from "classnames";

const Header = () => {
  const [isVisibleMenuButton, toggleMenuButton] = React.useState(false);

  const menuRoutes = [
    ["Episodes", "/", true],
    ["Characters", "/characters"],
    ["Quotes", "/quotes"],
  ];

  const menuItems = menuRoutes.map(([itemName, route, isExact], index) => {
    return (
      <li key={index} className={stl.menu__item}>
        <NavLink to={route} exact={isExact} activeClassName={stl.menu__item_active}>
          {itemName}
        </NavLink>
      </li>
    );
  });

  const toggleMenu = () => toggleMenuButton((isVisibleMenuButton) => !isVisibleMenuButton);

  return (
    <header className={stl.header}>
      <section className="container">
        <div className={stl.inner}>
          <h1 className={stl.title}>
            <span className={stl.title__part1}>Breaking</span>
            <span className={stl.title__part2}>Bad</span>
          </h1>
          <section className={stl.header__menu}>
            <div className={classNames(stl.header__btn, { [`${stl.on}`]: isVisibleMenuButton })} onClick={toggleMenu}>
              <div className={stl.one}></div>
              <div className={stl.two}></div>
              <div className={stl.three}></div>
            </div>
            <nav className={stl.menu}>
              <ul>{menuItems}</ul>
            </nav>
          </section>
        </div>
      </section>
    </header>
  );
};

export default Header;
