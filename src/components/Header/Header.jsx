import React from "react";
import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={css.Header}>
      <ul className={css.nav}>
        <li className={css.navItem}>Shop</li>
        <li className={css.dividingLine}>|</li>
        <li className={css.navItem}>Shopping Cart</li>
      </ul>
    </div>
  );
}
