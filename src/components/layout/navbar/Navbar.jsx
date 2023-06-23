import CartWidget from "../../common/cartWidget/Cartwidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <ul>
        <li>Accion</li>
        <li>Carreras</li>
        <li>Aventura</li>
        <li>Shooter</li>
        <li>Deporte</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
