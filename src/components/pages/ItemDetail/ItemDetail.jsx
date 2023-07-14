import ContadorConteiner from "../../Common/Contador/ContadorConteiner";
const ItemDetail = ({ producto, agregarAlCarrito }) => {
  return (
    <>
      <h1>{producto.title}</h1>
      <h1>{producto.price}</h1>
      <ContadorConteiner
        agregarAlCarrito={agregarAlCarrito}
        stock={producto.stock}
      />
    </>
  );
};

export default ItemDetail;
