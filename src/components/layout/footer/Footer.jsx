import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyrightIcon size="small" />
        <h4>Todos los derechos reservados</h4>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <InstagramIcon />
        <FacebookIcon />
        <WhatsAppIcon />
      </Box>
    </div>
  );
};

export default Footer;
