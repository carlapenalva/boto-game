import Contador from "./Contador";
import React, { useState } from "react";

const ContadorConteiner = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("No hay suficiente stock disponible.");
    }
  };
  const restar = () => {
    if (contador >= 2) {
      setContador(contador - 1);
    }
  };
  return (
    <Contador
      contador={contador}
      setContador={setContador}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
      sumar={sumar}
      restar={restar}
    />
  );
};

export default ContadorConteiner;
