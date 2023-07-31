import "./home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="categoriasHome">
        <ul className="home">
          <li className="li">
            <img
              src="https://res.cloudinary.com/dvuap85l1/image/upload/v1689521871/sxudtfrpqysijlalwc90.jpg"
              alt="fifa"
            />
          </li>
          <li className="li">
            <img
              src="https://res.cloudinary.com/dvuap85l1/image/upload/v1689603569/marvel-studios-red-logo-free-download-free-vector_cw4uka.jpg"
              alt="marvel"
            />
          </li>
          <li className="li">
            <img
              src="https://res.cloudinary.com/dvuap85l1/image/upload/v1689603594/disney-logo_iiir29.png"
              alt="disney"
            />
          </li>
          <li className="li">
            <img
              src="https://res.cloudinary.com/dvuap85l1/image/upload/v1689603925/pngtree-gaming-logo-png-image_3030187_jybijc.jpg"
              alt="accion"
            />
          </li>
          <li className="li">
            <img
              src="https://res.cloudinary.com/dvuap85l1/image/upload/v1689604045/SHOOTERS_oijhe0.png"
              alt="shooters"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
