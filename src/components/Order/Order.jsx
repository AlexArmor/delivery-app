import React from "react";
import css from "./Order.module.css";
import { FaTrash } from "react-icons/fa";

export default function Order({ item, onDelete }) {
  return (
    <div className={css.orderItem}>
      <div className={css.thumb}>
        <img src={item.img} alt={item.title} className={css.img} />
      </div>
      <h2 className={css.title}>{item.title}</h2>
      <p className={css.price}>{item.price}$</p>
      <FaTrash className={css.deleteIcon} onClick={() => onDelete(item.id)} />
    </div>
  );
}
