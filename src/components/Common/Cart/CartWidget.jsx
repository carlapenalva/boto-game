import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/*const { getTotalQuantity } = useContext(CartContext);

let total = getTotalQuantity();*/

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary" showZero>
      <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
    </Badge>
  );
};

export default CartWidget;
