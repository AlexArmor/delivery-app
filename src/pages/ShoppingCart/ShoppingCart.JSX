import { useSelector } from "react-redux";
import OrderList from "../../components/OrderList/OrderList";
import css from "./ShoppingCart.module.css";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const order = useSelector((state) => state.order.items);
  let total = 0;
  order.forEach((el) => (total += Number.parseFloat(el.price) * el.quantity));

  return (
    <div className={css.wrapper}>
      {order.length > 0 ? (
        <form className={css.orderForm}>
          <div className={css.contentBlock}>
            <div className={css.clientData}>
              <label>
                Name:
                <input type="text" name="name" id="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="mail" id="mail" required />
              </label>
              <label>
                Phone:
                <input type="tel" name="phone" id="phone" required />
              </label>
              <label>
                Address:
                <input type="text" name="address" id="address" required />
              </label>
            </div>
            <OrderList order={order} />
          </div>
          <div className={css.summarizing}>
            <p className={css.total}>
              Total: {new Intl.NumberFormat().format(total)}$
            </p>
            <button type="submit" className={css.btnSubmit}>
              Submit
            </button>
          </div>
        </form>
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
