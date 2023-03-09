import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar logo="../img/icono.png" />
      <div className="bodyApp">
        <h1>Aquarela</h1>
        <ItemListContainer greeting="¡Bienvenido!" />
      </div>
      <div className="botones">
        <Button texto="juguetes" />
        <Button texto="montessori bebes" />
        <Button texto="mobiliario" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
