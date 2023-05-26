import React from "react";
import css from "./SideBar.module.css";

export default function SideBar({ items }) {
  const shops = items.map((el) => {
    return Object.keys(el)[0];
  });
  return (
    <section className={css.SideBar}>
      <span className={css.listItemsTitle}>Shops:</span>
      <ul className={css.listItems}>
        {shops.map((company, index) => (
          <li key={index} className={css.item}>
            <button type="button" className={css.btn}>
              {company}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
