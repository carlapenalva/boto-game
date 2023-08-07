//import _default from "@mui/material/styles/identifier";
import ItemDetail from "./ItemDetail";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
/*import { toast, ToastContainer } from "react-toastify";*/
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState({});

  let { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  let cantidadEnCarrito = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "Items");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProducto({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = { ...producto, quantity: cantidad };
    addToCart(data);
  };

  return (
    <ItemDetail
      producto={producto}
      agregarAlCarrito={agregarAlCarrito}
      cantidadEnCarrito={cantidadEnCarrito}
    />
  );
};

export default ItemDetailConteiner;
