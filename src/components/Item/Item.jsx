import React from "react";
import css from "./Item.module.css";

export default function Item({ item: { img, title } }) {
  return (
    <>
      <img src={img} alt={title} className={css.img} />
      <h2 className={css.title}>{title}</h2>
      <div className="add-to-cart">+</div>
    </>
  );
}
