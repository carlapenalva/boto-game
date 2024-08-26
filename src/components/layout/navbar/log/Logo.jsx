import React, { useState } from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Logo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      navigate("/todas"); // Redirige a la página de todos los productos
    } else {
      navigate(`/search?q=${value}`); // Redirige a la página de búsqueda
    }
  };

  return (
    <Box className="contenedorLogo">
      <Box className="navMobile">
        <Link to="/">
          <img
            className="imagenLogo"
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1688405220/logoChico_ogpt0a.png"
            alt="logo"
          />
        </Link>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
          className="menuHamb"
        >
          <Button>
            <SearchIcon sx={{ fontSize: "2em" }}></SearchIcon>
          </Button>
          <Button>
            <MenuIcon sx={{ fontSize: "3em" }}></MenuIcon>
          </Button>
        </Box>
      </Box>
      <TextField
        onInput={handleSearch}
        value={searchTerm}
        className="buscador"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        id="filled-search"
        label="Buscador"
        type="search"
        variant="filled"
        size="small"
        InputProps={{
          style: { color: "white" },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
      ></TextField>
      <Box
        className="lugar"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <SportsEsportsIcon />
        <h2>Tu lugar</h2>
      </Box>
    </Box>
  );
};

export default Logo;
