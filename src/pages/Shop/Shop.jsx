import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ItemsList from "../../components/ItemsList/ItemsList";
import css from "./Shop.module.css";

export default function Shop() {
  const goods = [
    {
      id: 1001,
      title: "Big Kruck",
      img: "https://ikura.ua/Media/images/catalog_tree/medium/74603cc72ca26bd5c0ce5914b1dbd6d6.jpg",
      price: "10.99",
      shop: "McDucks",
      quantity: 1,
    },
    {
      id: 1002,
      title: "Kruck Book",
      img: "https://sushipizza.com.ua/image/cache/catalog/images_og/burg-og-300x300.jpg",
      price: "20.00",
      shop: "McDucks",
      quantity: 1,
    },
    {
      id: 1003,
      title: "Mac Book",
      img: "https://friendscafe.com.ua/wp-content/uploads/2022/07/monica-s-burger-300x300.jpg",
      price: "30.45",
      shop: "McDucks",
      quantity: 1,
    },
    {
      id: 1004,
      title: "Big Mac",
      img: "https://ks.biz.ua/wp-content/uploads/2019/02/blek-burher-300x300.jpg",
      price: "40.00",
      shop: "McDucks",
      quantity: 1,
    },
    {
      id: 2001,
      title: "Nuggets Burger",
      img: "https://osminog.online/wp-content/uploads/2022/08/burger-z-rapana-300x300.jpg",
      price: "14.99",
      shop: "KRC",
      quantity: 1,
    },
    {
      id: 2002,
      title: "Cheese burger",
      img: "https://www.sevenstarsburger.com/wp-content/uploads/2019/05/burger17-300x300.jpg",
      price: "21.88",
      shop: "KRC",
      quantity: 1,
    },
    {
      id: 2003,
      title: "Wings Burger",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtA9xCJlgz9bT9Q2U8UUOR-CjDA20CNSr8w&usqp=CAU",
      price: "32.00",
      shop: "KRC",
      quantity: 1,
    },
    {
      id: 2004,
      title: "Beak Burger",
      img: "https://friendscafe.com.ua/wp-content/uploads/2022/01/fish-burger-300x300.jpg",
      price: "43.05",
      shop: "KRC",
      quantity: 1,
    },
    {
      id: 3001,
      title: "King Burger",
      img: "https://nicefood-dostavka.site/wp-content/uploads/2020/08/burger-bekonator-300x300.jpg",
      price: "10.00",
      shop: "BurgerQueens",
      quantity: 1,
    },
    {
      id: 3002,
      title: "Prince Kruck",
      img: "https://simply-delicious-food.com/wp-content/uploads/2020/06/Lamb-burger-with-tzatziki-6-300x300.jpg",
      price: "11.55",
      shop: "BurgerQueens",
      quantity: 1,
    },
    {
      id: 3003,
      title: "Burger",
      img: "https://sytyjdyadya.com.ua/wp-content/uploads/2020/07/burger_black_1-1-1-300x300.jpg",
      price: "12.99",
      shop: "BurgerQueens",
      quantity: 1,
    },
    {
      id: 3004,
      title: "Smurger",
      img: "https://osminog.online/wp-content/uploads/2022/08/bif-burger-osminog-dostavka-sushi-kyyiv-300x300.jpg",
      price: "13.00",
      shop: "BurgerQueens",
      quantity: 1,
    },
  ];
  const shops = ["McDucks", "KRC", "BurgerQueens"];
  const [items, setItems] = useState(goods);

  function chooseShop(shop) {
    setItems(goods.filter((el) => el.shop === shop));
  }

  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <SideBar shops={shops} chooseShop={chooseShop} />
        <ItemsList items={items} />
      </div>
    </div>
  );
}
