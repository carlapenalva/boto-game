import React from "react";
import "./checkOut.css";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Button } from "@mui/material";

const CheckOut = () => {
  const { cart, getTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    let ordersCollections = collection(db, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div className="formulario">
      <h1>Terminar la compra</h1>

      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ marginBottom: "20px", width: "150px" }}
          >
            Comprar
          </Button>
        </form>
      ) : (
        <div className="compraFinalizada">
          <img src="https://res.cloudinary.com/dvuap85l1/image/upload/v1688405220/logoChico_ogpt0a.png" />
          <h3>El codigo de su compra es: {orderId} </h3>
        </div>
      )}
    </div>
  );
};
export default CheckOut;
