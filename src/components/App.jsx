import { useState } from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import ItemsList from "./ItemsList/ItemsList";

function App() {
  const food = [
    {
      McDucks: [
        {
          id: 1001,
          title: "BigKruck",
          img: "https://ikura.ua/Media/images/catalog_tree/medium/74603cc72ca26bd5c0ce5914b1dbd6d6.jpg",
        },
        {
          id: 1002,
          title: "KruckBook",
          img: "https://sushipizza.com.ua/image/cache/catalog/images_og/burg-og-300x300.jpg",
        },
        {
          id: 1003,
          title: "MacBook",
          img: "https://friendscafe.com.ua/wp-content/uploads/2022/07/monica-s-burger-300x300.jpg",
        },
        {
          id: 1004,
          title: "BigMac",
          img: "https://ks.biz.ua/wp-content/uploads/2019/02/blek-burher-300x300.jpg",
        },
      ],
    },
    {
      KRC: [
        {
          id: 2001,
          title: "NuggetsBurger",
          img: "https://osminog.online/wp-content/uploads/2022/08/burger-z-rapana-300x300.jpg",
        },
        {
          id: 2002,
          title: "Cheeseburger",
          img: "https://www.sevenstarsburger.com/wp-content/uploads/2019/05/burger17-300x300.jpg",
        },
        {
          id: 2003,
          title: "WingsBurger",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtA9xCJlgz9bT9Q2U8UUOR-CjDA20CNSr8w&usqp=CAU",
        },
        {
          id: 2004,
          title: "BeakBurger",
          img: "https://friendscafe.com.ua/wp-content/uploads/2022/01/fish-burger-300x300.jpg",
        },
      ],
    },
    {
      BurgerQueens: [
        {
          id: 3001,
          title: "KingBurger",
          img: "https://nicefood-dostavka.site/wp-content/uploads/2020/08/burger-bekonator-300x300.jpg",
        },
        {
          id: 3002,
          title: "PrinceKruck",
          img: "https://simply-delicious-food.com/wp-content/uploads/2020/06/Lamb-burger-with-tzatziki-6-300x300.jpg",
        },
        {
          id: 3003,
          title: "Burger",
          img: "https://sytyjdyadya.com.ua/wp-content/uploads/2020/07/burger_black_1-1-1-300x300.jpg",
        },
        {
          id: 3004,
          title: "Shmurger",
          img: "https://osminog.online/wp-content/uploads/2022/08/bif-burger-osminog-dostavka-sushi-kyyiv-300x300.jpg",
        },
      ],
    },
  ];
  const [items, setItems] = useState(food);
  // console.log(items[0]);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <SideBar items={items} />
        <ItemsList items={items[0]} />
      </div>
    </div>
  );
}

export default App;
