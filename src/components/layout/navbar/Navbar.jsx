import CartWidget from "../../Common/Cart/CartWidget";
import "./Navbar.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Grid container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/todas">
          <li>Todos</li>
        </Link>
        <Link to="/category/:categoryName">
          <li>Playstation</li>
        </Link>
        <Link to="/category/urbanas">
          <li>Computadora</li>
        </Link>
        <Link to="/category/urbanas">
          <li>XBOX</li>
        </Link>
        <Link to="/category/urbanas">
          <li className="categorias">
            Categorias <KeyboardDoubleArrowDownIcon />
          </li>
        </Link>
        <Link to="/cart">
          <li>
            <CartWidget />
          </li>
        </Link>
      </Box>
    </Grid>
  );
};

export default Navbar;
