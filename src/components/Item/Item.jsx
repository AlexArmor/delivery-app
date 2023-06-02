import React from "react";
import css from "./Item.module.css";
import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/orderSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const action = addToOrder(item);
    dispatch(action);
  };
  return (
    <>
      <div className={css.thumb}>
        <img src={item.img} alt={item.title} className={css.img} />
      </div>
      <h2 className={css.title}>{item.title}</h2>
      <p className={css.price}>{item.price}$</p>
      <div className={css.addToCart} onClick={handleClick}>
        +
      </div>
    </>
  );
}
