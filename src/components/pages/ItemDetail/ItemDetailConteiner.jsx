import _default from "@mui/material/styles/identifier";
import ItemDetail from "./ItemDetail";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
/*import { toast, ToastContainer } from "react-toastify";*/
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productoSel = productos.find((producto) => producto.id === +id);
      resolve(productoSel);
    });

    promesa.then((res) => setProducto(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...producto, quantity: cantidad };
    addToCart(data);
  };

  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailConteiner;
