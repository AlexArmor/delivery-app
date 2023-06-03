import { useState, useEffect, Suspense } from "react";
import { Outlet, NavLink, Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import classNames from "classnames";
import css from "./Header.module.css";
import Order from "../Order/Order";

export default function Header() {
  const { cart } = useParams();
  const [cartOpen, setCartOpen] = useState(false);
  const [isShoppingCartShown, setIsShoppingCartShown] = useState(true);

  const order = useSelector((state) => state.order.items);

  useEffect(() => {
    if (cart) {
      setIsShoppingCartShown(false);
    } else {
      setIsShoppingCartShown(true);
    }
  }, [cart]);

  let total = 0;
  order.forEach((el) => (total += Number.parseFloat(el.price) * el.quantity));

  return (
    <>
      <div className={css.Header}>
        <ul className={css.nav}>
          <li className={classNames(css.navItem, css.shop)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames(css.NavLink, { [css.active]: isActive })
              }
            >
              Shop
            </NavLink>
          </li>
          <li
            className={classNames(css.navItem, css.shoppingCart)}
            onMouseEnter={() => {
              if (isShoppingCartShown) setCartOpen(true);
            }}
            onMouseLeave={() => setCartOpen(false)}
          >
            {order.length > 0 && <span className={css.redCircle}></span>}
            {order.length > 0 ? (
              <NavLink
                onClick={() => setCartOpen(false)}
                to="/cart"
                className={({ isActive }) =>
                  classNames(css.NavLink, { [css.active]: isActive })
                }
              >
                Shopping Cart
                <FaShoppingCart className={css.shoppingCartIcon} />
              </NavLink>
            ) : (
              <p className={css.textIfCartIsEmpty}>
                Shopping Cart
                <FaShoppingCart className={css.shoppingCartIcon} />
              </p>
            )}
            {cartOpen && (
              <div className={css.cartWindow}>
                {order.length > 0 ? (
                  <div>
                    <ul className={css.orderList}>
                      {order.map((el) => (
                        <li className={css.orderListItem} key={"cart-" + el.id}>
                          <Order item={el} />
                        </li>
                      ))}
                    </ul>
                    <p className={css.total}>
                      Total: {new Intl.NumberFormat().format(total)}$
                      <Link
                        onClick={() => setCartOpen(false)}
                        to="/cart"
                        className={css.linkToOrder}
                      >
                        Go to Checkout
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div className={css.empty}>
                    <h2>Cart is empty</h2>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
