import React from "react";
import search from "../img/search.svg";
import profile from "../img/user-circle.svg";
import basket from "../img/basket.svg";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import Search from "./Search";

export default function Header() {
  return (
    <header>
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
          <Search />
          <img className="header-search" src={search} />
          <img className="header-profile" src={profile} />
          <Link to={`/cart`}>
            <img className="header-basket" src={basket} />
          </Link>
        </div>
      </div>
    </header>
  );
}
