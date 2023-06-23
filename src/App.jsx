import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemlistConteiner from "./components/pages/itemList/ItemlistConteiner";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ItemlistConteiner />
    </>
  );
}

export default App;
