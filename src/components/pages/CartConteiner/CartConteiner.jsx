import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let limpiar = () => {
    Swal.fire({
      title: "seguro quieres eliminar todo ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "si, limpiar",
      denyButtonText: `No, no limpiar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div className="carrito">
      <section>
        <div className="contenedorDeProductos">
          {cart.map((elemento) => {
            return (
              <div className="carritoUno" key={elemento.id}>
                <img src={elemento.img} />
                <h3>{elemento.title}</h3>
                <h3>{elemento.price}</h3>
                <h4>Cantidad: {elemento.quantity}</h4>
                <Button
                  variant="contained"
                  onClick={() => deleteById(elemento.id)}
                  sx={{ height: "30px" }}
                >
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="carritoDos">
          <h2>Resumen de compra</h2>
          <h2>Total: ${total} </h2>
          {cart.length > 0 && (
            <>
              <Button
                variant="outlined"
                onClick={limpiar}
                sx={{ marginBottom: "1em" }}
              >
                Limpiar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="outlined">Terminar compra</Button>
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartContainer;
