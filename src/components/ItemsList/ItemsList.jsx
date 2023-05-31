import React from "react";
import css from "./ItemsList.module.css";
import Item from "../Item/Item";

export default function ItemsList({ items, onAdd }) {
  return (
    <section className={css.sectionItems}>
      <ul className={css.listItem}>
        {items.map((el) => (
          <li key={el.id} className={css.item}>
            <Item item={el} onAdd={onAdd} />
          </li>
        ))}
      </ul>
    </section>
  );
}
