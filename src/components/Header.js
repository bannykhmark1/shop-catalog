import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Корзина пуста</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="header-container">
      <div className="logo">
        <span>Интернет Магазин</span>
      </div>

      <ul className="nav">
        <li>О нас</li>
        <li>Каталог товаров</li>
        <li>Контакты</li>
        <li>
          <AiOutlineShopping
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shopping-card`}
          />

          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
