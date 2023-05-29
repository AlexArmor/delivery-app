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
          price: "10.99",
        },
        {
          id: 1002,
          title: "KruckBook",
          img: "https://sushipizza.com.ua/image/cache/catalog/images_og/burg-og-300x300.jpg",
          price: "20.00",
        },
        {
          id: 1003,
          title: "MacBook",
          img: "https://friendscafe.com.ua/wp-content/uploads/2022/07/monica-s-burger-300x300.jpg",
          price: "30.45",
        },
        {
          id: 1004,
          title: "BigMac",
          img: "https://ks.biz.ua/wp-content/uploads/2019/02/blek-burher-300x300.jpg",
          price: "40.00",
        },
      ],
    },
    {
      KRC: [
        {
          id: 2001,
          title: "NuggetsBurger",
          img: "https://osminog.online/wp-content/uploads/2022/08/burger-z-rapana-300x300.jpg",
          price: "14.99",
        },
        {
          id: 2002,
          title: "Cheeseburger",
          img: "https://www.sevenstarsburger.com/wp-content/uploads/2019/05/burger17-300x300.jpg",
          price: "21.88",
        },
        {
          id: 2003,
          title: "WingsBurger",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxtA9xCJlgz9bT9Q2U8UUOR-CjDA20CNSr8w&usqp=CAU",
          price: "32.00",
        },
        {
          id: 2004,
          title: "BeakBurger",
          img: "https://friendscafe.com.ua/wp-content/uploads/2022/01/fish-burger-300x300.jpg",
          price: "43.05",
        },
      ],
    },
    {
      BurgerQueens: [
        {
          id: 3001,
          title: "KingBurger",
          img: "https://nicefood-dostavka.site/wp-content/uploads/2020/08/burger-bekonator-300x300.jpg",
          price: "10.00",
        },
        {
          id: 3002,
          title: "PrinceKruck",
          img: "https://simply-delicious-food.com/wp-content/uploads/2020/06/Lamb-burger-with-tzatziki-6-300x300.jpg",
          price: "11.55",
        },
        {
          id: 3003,
          title: "Burger",
          img: "https://sytyjdyadya.com.ua/wp-content/uploads/2020/07/burger_black_1-1-1-300x300.jpg",
          price: "12.99",
        },
        {
          id: 3004,
          title: "Shmurger",
          img: "https://osminog.online/wp-content/uploads/2022/08/bif-burger-osminog-dostavka-sushi-kyyiv-300x300.jpg",
          price: "13.00",
        },
      ],
    },
  ];
  const [items, setItems] = useState(food);
  const [order, setOrder] = useState([]);

  function addToOrder(item) {
    let isInArray = false;
    order.forEach((el) => {
      if (item.id === el.id) isInArray = true;
    });
    if (!isInArray) setOrder([...order, item]);
  }

  function deleteOrder(id) {
    setOrder(order.filter((el) => el.id !== id));
  }

  return (
    <div className="wrapper">
      <Header order={order} onDelete={deleteOrder} />
      <div className="main">
        <SideBar items={items} />
        <ItemsList items={items[0]} onAdd={addToOrder} />
      </div>
    </div>
  );
}

export default App;
