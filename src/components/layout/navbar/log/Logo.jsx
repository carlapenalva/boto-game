import React from "react";
import "./Logo.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="contenedorLogo">
      <Link to="/">
        <img
          style={{ width: "150px", height: "150px" }}
          src="https://res.cloudinary.com/dvuap85l1/image/upload/v1688405220/logoChico_ogpt0a.png"
          alt="logo"
        />
      </Link>
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
      <div className="lugar">
        <SportsEsportsIcon />
        <h2>Tu lugar</h2>
      </div>
    </div>
  );
};

export default Logo;
