import css from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div className={css.wrapper}>
      <form className={css.orderForm}>
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
        <button type="submit" className={css.btnSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
