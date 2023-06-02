import { useState } from "react";
import classNames from "classnames";
import css from "./SideBar.module.css";

export default function SideBar({ shops, chooseShop }) {
  const [activeShop, setActiveShop] = useState(null);
  const handleShopClick = (company) => {
    setActiveShop(company);
    chooseShop(company);
  };

  return (
    <section className={css.SideBar}>
      <span className={css.listItemsTitle}>Shops:</span>
      <ul className={css.listItems}>
        {shops.map((company) => (
          <li key={company} className={css.item}>
            <button
              type="button"
              onClick={() => handleShopClick(company)}
              className={classNames(css.btn, {
                [css.active]: activeShop === company,
              })}
              // className={css.btn}
            >
              {company}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
