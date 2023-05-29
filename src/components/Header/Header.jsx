import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import classNames from "classnames";
import css from "./Header.module.css";
import Order from "../Order/Order";

export default function Header({ order, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);

  let total = 0;
  order.forEach((el) => (total += Number.parseFloat(el.price)));

  return (
    <div className={css.Header}>
      <ul className={css.nav}>
        <li className={classNames(css.navItem, css.shop)}>Shop</li>
        <li
          className={classNames(css.navItem, css.shoppingCart)}
          onMouseEnter={() => setCartOpen(true)}
          onMouseLeave={() => setCartOpen(false)}
        >
          Shopping Cart
          <FaShoppingCart className={css.shoppingCartIcon} />
          {cartOpen && (
            <div className={css.cartWindow}>
              {order.length > 0 ? (
                <div>
                  {order.map((el) => (
                    <Order key={el.id} item={el} onDelete={onDelete} />
                  ))}
                  <p className={css.total}>
                    Total: {new Intl.NumberFormat().format(total)}$
                  </p>
                </div>
              ) : (
                <div className={css.empty}>
                  <h2>Cart is empty</h2>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
