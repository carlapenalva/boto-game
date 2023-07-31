import ProductCard from "../../Common/productCard/ProductCard";
const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        paddingTop: "35px",
        gap: "40px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
