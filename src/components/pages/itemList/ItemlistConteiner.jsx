import Itemlist from "./Itemlist";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";

const ItemlistConteiner = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;

    let productsCollection = collection(db, "Items");

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemlistConteiner;
