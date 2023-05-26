import React from "react";
import css from "./ItemsList.module.css";
import Item from "../Item/Item";

export default function ItemsList({ items: { McDucks } }) {
  console.log(McDucks);
  return (
    <section className={css.sectionItems}>
      <ul className={css.listItem}>
        {McDucks.map((el) => (
          <li key={el.id} className={css.item}>
            <Item item={el} />
          </li>
        ))}
      </ul>
    </section>
  );
}
