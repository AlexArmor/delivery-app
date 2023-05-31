import React from "react";
import css from "./SideBar.module.css";

export default function SideBar({ shops, chooseShop }) {
  return (
    <section className={css.SideBar}>
      <span className={css.listItemsTitle}>Shops:</span>
      <ul className={css.listItems}>
        {shops.map((company, index) => (
          <li key={company} className={css.item}>
            <button
              type="button"
              className={css.btn}
              onClick={() => chooseShop(company)}
            >
              {company}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
