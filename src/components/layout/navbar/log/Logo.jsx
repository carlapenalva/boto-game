import React, { useState } from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import CartWidget from "../../../Common/Cart/CartWidget";
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
            <SearchIcon sx={{ fontSize: "2em", color: "white" }}></SearchIcon>
          </Button>
          <Button>
            <MenuIcon sx={{ fontSize: "3em", color: "white" }}></MenuIcon>
          </Button>
          <Link to="/cart">
            <li>
              <CartWidget />
            </li>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          margin: "1px",
        }}
        className="boxBuscador"
      >
        <SportsEsportsIcon />
        <TextField
          onInput={handleSearch}
          value={searchTerm}
          className="buscador"
          sx={{
            margin: "5px",
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
      </Box>
      <Box
        className="lugar"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Link to="/cart">
          <li>
            <CartWidget />
          </li>
        </Link>
      </Box>
    </Box>
  );
};

export default Logo;
