// import Home from "./components/pages/home/Home";
// import Logo from "./components/layout/navbar/log/Logo";
// import Navbar from "./components/layout/navbar/Navbar";
// import ItemlistConteiner from "./components/pages/itemList/ItemlistConteiner";
// import ItemDetailConteiner from "./components/pages/ItemDetail/ItemDetailConteiner";
// import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Logo />
//       <Navbar />
//       <Home />
//       <ItemlistConteiner />
//       <ItemDetailConteiner />
//     </>
//   );
// }

// export default App;
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
