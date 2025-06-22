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
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={restar}
          style={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "30px",
            border: "none",
          }}
        >
          -
        </button>
        <h4>{contador}</h4>
        <button
          onClick={sumar}
          style={{
            backgroundColor: "transparent",
            color: "white",
            fontSize: "20px",
            border: "none",
          }}
        >
          +
        </button>
      </Box>
      <Button variant="outlined" onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Contador;
