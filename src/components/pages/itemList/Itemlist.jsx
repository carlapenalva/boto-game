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
          <h2>{item.title} </h2>
          <h3>{item.tipo}</h3>
        </div>
        /*<ProductCard key={item.id} item={item} />*/
      ))}
    </div>
  );
};

export default ItemList;
