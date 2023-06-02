import { useState, useEffect, Suspense } from "react";
import { Outlet, NavLink, Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import classNames from "classnames";
import css from "./Header.module.css";
import Order from "../Order/Order";

import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useParams();
  const [cartOpen, setCartOpen] = useState(false);
  const [isShoppingCartShown, setIsShoppingCartShown] = useState(true);

  useEffect(() => {
    if (cart) {
      setIsShoppingCartShown(false);
    } else {
      setIsShoppingCartShown(true);
    }
  }, [cart]);

  const order = useSelector((state) => state.order.items);

  let total = 0;
  order.forEach((el) => (total += Number.parseFloat(el.price) * el.quantity));

  return (
    <>
      <div className={css.Header}>
        <ul className={css.nav}>
          <li className={classNames(css.navItem, css.shop)}>
            <NavLink
              // onClick={() => setIsShoppingCartShown(true)}
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
            {cartOpen && (
              <div className={css.cartWindow}>
                {order.length > 0 ? (
                  <div>
                    {order.map((el) => (
                      <Order key={"cart-" + el.id} item={el} />
                    ))}
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
