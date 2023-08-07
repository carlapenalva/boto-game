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
        <h4>Todos los derechos reservados - Carla Peñalva</h4>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a href="https://www.instagram.com/">
          <InstagramIcon sx={{ padding: "5px" }} />
        </a>
        <a href="https://es-la.facebook.com/">
          <FacebookIcon sx={{ padding: "5px" }} />
        </a>
        <a href="https://www.whatsapp.com/">
          <WhatsAppIcon sx={{ padding: "5px" }} />
        </a>
      </Box>
    </div>
  );
};

export default Footer;
