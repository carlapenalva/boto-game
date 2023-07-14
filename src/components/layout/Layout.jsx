import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Logo from "./navbar/log/Logo";

const Layout = () => {
  return (
    <>
      <Logo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
