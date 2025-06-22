import React, { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import "./searchResultsPaje.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SearchResultsPage = () => {
  const [items, setItems] = useState([]);

  const location = useLocation();

  // Obtener el parámetro de búsqueda desde la URL
  const searchTerm = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    const fetchData = async () => {
      let consulta = collection(db, "Items");

      const querySnapshot = await getDocs(consulta);

      const arrayProductos = querySnapshot.docs
        .map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
        .filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setItems(arrayProductos);
    };

    fetchData();
  }, [searchTerm]);

  return (
    <section className="divSearch">
      <h1>Resultados de búsqueda para "{searchTerm}":</h1>
      <div className="searchResults">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="productos" key={item.id}>
              <img src={item.img} alt={item.title} />
              <h2>{item.title}</h2>
              <h3>{item.tipo}</h3>
              <Link to={`/itemDetail/${item.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </div>
          ))
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
    </section>
  );
};

export default SearchResultsPage;
