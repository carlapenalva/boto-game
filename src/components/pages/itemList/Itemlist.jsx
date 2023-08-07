/*import ProductCard from "../../Common/productCard/ProductCard";*/
import "./Itemlist.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ItemList = ({ items }) => {
  return (
    <div className="contenedorProductos">
      {items.map((item) => (
        <div className="productos" key={item.id}>
          <img src={item.img} alt={item.title} />
          <Link to={`/itemDetail/${item.id}`}>
            <Button>Ver detalle</Button>
          </Link>
          <h1>{item.title} </h1>
          <h2>{item.tipo}</h2>
        </div>
        /*<ProductCard key={item.id} item={item} />*/
      ))}
    </div>
  );
};

export default ItemList;
