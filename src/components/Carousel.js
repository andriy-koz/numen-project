import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import alpamanta from "../images/alpamanta.jpg";
import atamisque from "../images/atamisque.jpg";
import bianchi from "../images/bianchi.jpg";
import catenaZapata from "../images/catenaZapata.jpg";
import escorihuelaGascon from "../images/escorihuelaGascon.jpg";
import estanciaMendoza from "../images/estanciaMendoza.jpg";
import salentein from "../images/salentein.jpg";
import septimaVista from "../images/septimaVista.jpg";
import suter from "../images/suter.jpg";
import tierrasAltas from "../images/tierrasAltas.jpg";
import trivento from "../images/trivento.jpg";
import zuccardi from "../images/zuccardi.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    key="1"
    alt="Alpamanta"
    className="carousel-img"
    src={alpamanta}
    title="Alpamanta"
    onDragStart={handleDragStart}
  />,
  <img
    key="2"
    alt="Atamisque"
    className="carousel-img"
    src={atamisque}
    title="Atamisque"
    onDragStart={handleDragStart}
  />,
  <img
    key="3"
    alt="Bianchi"
    className="carousel-img"
    src={bianchi}
    title="Bianchi"
    onDragStart={handleDragStart}
  />,
  <img
    key="4"
    alt="Catena Zapata"
    className="carousel-img"
    src={catenaZapata}
    title="Catena Zapata"
    onDragStart={handleDragStart}
  />,
  <img
    key="5"
    alt="Escorihuela Gascón"
    className="carousel-img"
    src={escorihuelaGascon}
    title="Escorihuela Gascón"
    onDragStart={handleDragStart}
  />,
  <img
    key="6"
    alt="Estancia Mendoza"
    className="carousel-img"
    src={estanciaMendoza}
    title="Estancia Mendoza"
    onDragStart={handleDragStart}
  />,
  <img
    key="7"
    alt="Salentein"
    className="carousel-img"
    src={salentein}
    title="Salentein"
    onDragStart={handleDragStart}
  />,
  <img
    key="8"
    alt="Septima Vista"
    className="carousel-img"
    src={septimaVista}
    title="Septima Vista"
    onDragStart={handleDragStart}
  />,
  <img
    key="9"
    alt="Suter"
    className="carousel-img"
    src={suter}
    title="Suter"
    onDragStart={handleDragStart}
  />,
  <img
    key="10"
    alt="Tierras Altas"
    className="carousel-img"
    src={tierrasAltas}
    title="Tierras Altas"
    onDragStart={handleDragStart}
  />,
  <img
    key="11"
    alt="Trivento"
    className="carousel-img"
    src={trivento}
    title="Trivento"
    onDragStart={handleDragStart}
  />,
  <img
    key="12"
    alt="Zuccardi"
    className="carousel-img"
    src={zuccardi}
    title="Zuccardi"
    onDragStart={handleDragStart}
  />,
];

const responsive = {
  320: {items: 1},
  550: {items: 2},
  768: {items: 3},
};

const Gallery = () => {
  return (
    <>
      <div className="contenedor-general">
        <h2 className="carousel-h2" id="bodegas">
          Nuestras bodegas
        </h2>
        <h6 className="carousel-h6">(Apoya el cursor para más información)</h6>
        <AliceCarousel
          // ¿Por qué tiene desactivado los controles? ¿Cómo sabe el usuario que es un slider?
          autoPlay
          disableButtonsControls
          disableDotsControls
          infinite
          mouseTracking
          autoPlayInterval={2500}
          items={items}
          paddingLeft={50}
          paddingRight={50}
          responsive={responsive}
        />
      </div>
    </>
  );
};

export default Gallery;
