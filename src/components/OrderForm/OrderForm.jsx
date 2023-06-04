import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../redux/orderSlice";
import OrderList from "../../components/OrderList/OrderList";
import css from "./OrderForm.module.css";

export default function OrderForm({ order }) {
  const [orderData, setOrderData] = useState({
    name: "",
    mail: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();

  let total = 0;
  order.forEach((el) => (total += Number.parseFloat(el.price) * el.quantity));

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const dataToSend = {
      ...orderData,
      order,
    };
    event.target.reset();
    setOrderData({
      name: "",
      mail: "",
      phone: "",
      address: "",
    });
    const action = resetOrder();
    dispatch(action);
    alert("Your order has been sent for processing! Wait for the courier!");
    console.log(dataToSend);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form className={css.orderForm} onSubmit={handleFormSubmit} id="myForm">
        <div className={css.contentBlock}>
          <div className={css.clientData}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                id="name"
                required
                value={orderData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="mail"
                id="mail"
                required
                value={orderData.mail}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={orderData.phone}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                id="address"
                required
                value={orderData.address}
                onChange={handleInputChange}
              />
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
    </>
  );
}
