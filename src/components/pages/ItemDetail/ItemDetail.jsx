import ContadorConteiner from "../../Common/Contador/ContadorConteiner";
import "./itemDetail.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShopIcon from "@mui/icons-material/Shop";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SavingsIcon from "@mui/icons-material/Savings";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const ItemDetail = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="productoDetalle">
      <div className="detalle">
        <img src={producto.img} alt={producto.title} />
        <h3>{producto.description}</h3>
      </div>
      <div className="accordion">
        <Accordion
          sx={{
            backgroundColor: "rgba(39, 39, 39, 0.219)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Detalle producto</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{producto.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="contador">
        <h1>{producto.title}</h1>
        <img src={producto.img} alt={producto.title} />
        <h2>${producto.price}</h2>
        <h3>Stock disponible: {producto.stock}</h3>
        <ContadorConteiner
          agregarAlCarrito={agregarAlCarrito}
          stock={producto.stock}
        />
        {/*<h4>Medios de pago:</h4>
        <div>
          <h5>
            <CreditCardIcon />
            Tarjeta de credito
          </h5>
          <h5>
            <CreditScoreIcon />
            Tarjeta de debito
          </h5>
          <h5>
            <SavingsIcon />
            Efectivo mediante rapipago
          </h5>
        </div>*/}
      </div>
    </div>
  );
};

export default ItemDetail;
