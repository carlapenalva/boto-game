import React from "react";
import "./Logo.css";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
/*Aca iria el logo + la busqueda. Antes de la navBar.*/

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center", // Agregamos esta línea para centrar verticalmente los elementos
        gap: 10, // Agregamos un espacio entre los elementos
      }}
    >
      <img
        style={{ width: "150px", height: "150px" }}
        src="https://res.cloudinary.com/dvuap85l1/image/upload/v1688405220/logoChico_ogpt0a.png"
        alt="logo"
      />
      <TextField
        sx={{ backgroundColor: "white", width: "400px" }}
        id="filled-search"
        label="Buscador"
        type="search"
        variant="filled"
        size="small"
        InputProps={{
          style: { color: "#0882c9" },
        }}
      />
      <Box
        sx={{
          flexDirection: "row",
          display: { xs: "none", md: "block" },
        }}
      >
        <SportsEsportsIcon />
        <h2 className="lugar">Tu lugar</h2>
      </Box>
    </Box>
  );
};

export default Logo;
