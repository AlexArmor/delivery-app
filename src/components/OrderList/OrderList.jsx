import Order from "../Order/Order";
import css from "./OrderList.module.css";

export default function OrderList({ order }) {
  return (
    <>
      <ul className={css.orderList}>
        {order.map((el) => (
          <li className={css.orderListItem} key={"cart-" + el.id}>
            <Order item={el} />
          </li>
        ))}
      </ul>
    </>
  );
}
