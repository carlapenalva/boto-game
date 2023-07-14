import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const Contador = ({
  contador,
  setContador,
  agregarAlCarrito,
  stock,
  sumar,
  restar,
}) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button onClick={restar}>
          <RemoveCircleOutlineIcon />
        </button>
        <h4>{contador}</h4>
        <button onClick={sumar}>
          <AddCircleOutlineIcon />
        </button>
      </Box>
      <Button variant="outlined" onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Contador;
