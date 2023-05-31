import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
const Shop = lazy(() => import("../pages/Shop/Shop"));
const ShoppingCart = lazy(() =>
  import("../pages/ShoppingCart/ShoppingCart.module.css")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Shop />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
export default App;
