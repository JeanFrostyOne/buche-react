import React from "react";
import search from "../img/search.svg";
import profile from "../img/user-circle.svg";
import basket from "../img/basket.svg";

export default function Header() {
  return (
    <div className="header-container">
      <p className="header-logo">буше</p>
      <ul className="header-menu">
        <li>о компании</li>
        <li>продукция</li>
        <li>доставка</li>
        <li>акции и новости</li>
        <li>оптовые продажи</li>
        <li>адреса и контакты</li>
      </ul>
      <div className="header-row">
        <img className="header-search" src={search} />
        <img className="header-profile" src={profile} />
        <img className="header-basket" src={basket} />
      </div>
    </div>
  );
}
