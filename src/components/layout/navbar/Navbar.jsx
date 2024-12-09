import "./Navbar.css";
//import { useState } from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  /*const [isOpen, setIsOpen] = useState(false);
  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };*/
  return (
    <Grid>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Link to="/" sx={{ textDecorationLine: "none" }}>
          <li>Inicio</li>
        </Link>
        <Link to="/todas">
          <li>Todos</li>
        </Link>
        <Link to="/category/playstation">
          <li>Playstation</li>
        </Link>
        <Link to="/category/computadora">
          <li>PC</li>
        </Link>
        <Link to="/category/xbox">
          <li>XBOX</li>
        </Link>
      </Box>
    </Grid>
  );
};

export default Navbar;
