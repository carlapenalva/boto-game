import Itemlist from "./Itemlist";
import { useState, useEffect } from "react";
import { productos } from "../../../productsMock";
import { useParams } from "react-router-dom";

const ItemlistConteiner = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = productos.filter(
      (productos) => productos.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productosFiltrados : productos);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemlistConteiner;
