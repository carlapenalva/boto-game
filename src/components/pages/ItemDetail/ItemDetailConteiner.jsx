import _default from "@mui/material/styles/identifier";
import ItemDetail from "./ItemDetail";
import React, { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let promesa = new Promise((resolve, reject) => {
      let productoSel = productos.find((producto) => producto.id === +id);
      resolve(productoSel);
    });

    promesa.then((res) => setProducto(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let productoIntegrado = { ...producto, quantity: cantidad };
    console.log(productoIntegrado);
  };
  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailConteiner;
