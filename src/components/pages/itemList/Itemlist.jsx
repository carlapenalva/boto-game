import ProductCard from "../../Common/productCard/ProductCard";
const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "35px",
        gap: "20px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
