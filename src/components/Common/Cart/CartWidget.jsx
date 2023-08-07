import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();
  return (
    <Badge badgeContent={total} color="primary" showZero>
      <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
    </Badge>
  );
};

export default CartWidget;
