import Home from "../components/pages/home/Home";
import ItemlistConteiner from "../components/pages/itemList/ItemlistConteiner";
import ItemDetailConteiner from "../components/pages/ItemDetail/ItemDetailConteiner";
import CartConteiner from "../components/pages/CartConteiner/CartConteiner";
import CheckOut from "../components/pages/checkOut/CheckOut";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "todas",
    path: "/todas",
    Element: ItemlistConteiner,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemlistConteiner,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailConteiner,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartConteiner,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOut,
  },
];
