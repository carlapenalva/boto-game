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
  const [isOpen, setIsOpen] = useState(false);
  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Si se abre el buscador, aseguramos que el menú hamburguesa esté cerrado
    if (isOpen) setIsOpen(false);
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
          <Box>
            <Button onClick={toggleSearch}>
              <SearchIcon
                sx={{ fontSize: "2em", color: "white", marginTop: "1.3em" }}
              ></SearchIcon>
            </Button>
            <Box
              className={`mobile-search-input ${isSearchOpen ? "active" : ""}`}
              sx={{
                width: "100%",
                justifyContent: "center",
                padding: "10px 0", // Padding para el input
                position: "absolute", // Para que se despliegue debajo del header
                top: "100px", // Ajusta esta altura según la altura total de tu navMobile cuando está colapsado
                left: 0,
                zIndex: 999, // Un z-index menor que el menú hamburguesa, pero mayor que el contenido
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <SportsEsportsIcon sx={{ color: "white" }} />
              <TextField
                onInput={handleSearch}
                value={searchTerm}
                className="buscador-mobile" // Nueva clase para el input móvil
                sx={{
                  margin: "5px",
                }}
                id="filled-search-mobile"
                label="Buscar juego..."
                type="search"
                variant="filled"
                size="small"
                InputProps={{
                  style: { color: "white" },
                }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
              />
            </Box>
          </Box>
          <Box>
            <Button onClick={abrirMenu}>
              <MenuIcon
                sx={{ fontSize: "3em", color: "white", marginTop: "0.7em" }}
              ></MenuIcon>
            </Button>
            <ul className={`nav-links ${isOpen ? "active" : ""}`}>
              <Link to="/" sx={{ textDecorationLine: "none" }}>
                <li>Inicio</li>
              </Link>
              <Link to="/todas" onClick={abrirMenu}>
                <li>Todos</li>
              </Link>
              <Link to="/category/playstation" onClick={abrirMenu}>
                <li>Playstation</li>
              </Link>
              <Link to="/category/computadora" onClick={abrirMenu}>
                <li>PC</li>
              </Link>
              <Link to="/category/xbox" onClick={abrirMenu}>
                <li>XBOX</li>
              </Link>
            </ul>
          </Box>
          <Box>
            <Link to="/cart">
              <li>
                <CartWidget />
              </li>
            </Link>
          </Box>
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
