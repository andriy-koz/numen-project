import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import "./styles.css";
import alpamanta from "../../images/alpamanta.jpg";
import atamisque from "../../images/atamisque.jpg";
import bianchi from "../../images/bianchi.jpg";
import catenaZapata from "../../images/catenaZapata.jpg";
import escorihuelaGascon from "../../images/escorihuelaGascon.jpg";
import estanciaMendoza from "../../images/estanciaMendoza.jpg";
import salentein from "../../images/salentein.jpg";
import septimaVista from "../../images/septimaVista.jpg";
import suter from "../../images/suter.jpg";
import tierrasAltas from "../../images/tierrasAltas.jpg";
import trivento from "../../images/trivento.jpg";
import zuccardi from "../../images/zuccardi.jpg";
import Title from "../Title";

const handleDragStart = (e) => e.preventDefault();

const images = [
  {image: alpamanta, name: "Alpamanta"},
  {image: atamisque, name: "Atamisque"},
  {image: bianchi, name: "Bianchi"},
  {image: catenaZapata, name: "Catena Zapata"},
  {image: escorihuelaGascon, name: "Escorihuela Gascon"},
  {image: estanciaMendoza, name: "Estancia Mendoza"},
  {image: salentein, name: "Salentein"},
  {image: septimaVista, name: "Septima Vista"},
  {image: suter, name: "Suter"},
  {image: tierrasAltas, name: "Tierras Altas"},
  {image: trivento, name: "Trivento"},
  {image: zuccardi, name: "Zuccardi"},
];

const items = images.map((item, index) => (
  <img key={index} alt={item.name} src={item.image} onDragStart={handleDragStart} />
));

const responsive = {
  375: {items: 1},
  550: {items: 2},
  768: {items: 3},
  1200: {items: 4},
};

const Gallery = () => {
  return (
    <div className="container" id="warehouse">
      <Title text1="Nuestras" text2="bodegas" />
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </div>
  );
};

export default Gallery;
