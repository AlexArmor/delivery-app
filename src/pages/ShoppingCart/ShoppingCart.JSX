import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import css from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  const order = useSelector((state) => state.order.items);

  return (
    <div className={css.wrapper}>
      {order.length > 0 ? (
        <OrderForm order={order} />
      ) : (
        <div className={css.empty}>
          <h2>Cart is empty</h2>
          <Link to="/" className={css.linkToShop}>
            Back to product selection
          </Link>
        </div>
      )}
    </div>
  );
}
