import React from "react";
import css from "./Order.module.css";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  deleteOrder,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/orderSlice";

export default function Order({ item }) {
  const dispatch = useDispatch();

  return (
    <div className={css.orderItem}>
      <div className={css.thumb}>
        <img src={item.img} alt={item.title} className={css.img} />
      </div>
      <div className={css.itemInfo}>
        <h2 className={css.title}>{item.title}</h2>
        <p className={css.price}>
          {new Intl.NumberFormat().format(item.price * item.quantity)}$
        </p>
      </div>
      <div className={css.mathSymbolsList}>
        <button
          type="button"
          className={css.minus}
          onClick={() => {
            const action = decreaseQuantity(item.id);
            dispatch(action);
          }}
          disabled={item.quantity <= 1 ? true : false}
        >
          -
        </button>
        <button
          type="button"
          className={css.plus}
          onClick={() => {
            const action = increaseQuantity(item.id);
            dispatch(action);
          }}
        >
          +
        </button>
      </div>
      <p className={css.quantity}>{item.quantity}</p>
      <FaTrash
        className={css.deleteIcon}
        onClick={() => {
          const action = deleteOrder(item.id);
          dispatch(action);
        }}
      />
    </div>
  );
}
