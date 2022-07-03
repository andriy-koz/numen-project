import {createContext, useState} from "react";
import {ThemeProvider} from "styled-components";

import {GlobalStyles} from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
// TIP: index.js facilita el import para evitar la redundancia
import Hero from "./components/Hero/Hero";
// Este componente no se está utilizando
import Contador from "./components/Contador";
import Wines from "./components/Wines";
import Gallery from "./components/Carousel";
import "./styles/carousel.css";
import Form from "./components/Form/Form";
import {FooterContainer} from "./containers/footer";
import ModalAge from "./components/ModalAge/ModalAge";

// Crear carpeta contexts para poner el contexto, queda más prolijo y limpio
export const ContadorContext = createContext();

// Aconsejar conventional commits de ahora en adelante
function App() {
  const [cont, setCount] = useState(0);
  const [modalAgeOpen, setModalAgeOpen] = useState(true);
  // Es más limpio setear el estado con el opuesto del valor previo
  const modalAgeHandler = () => setModalAgeOpen(!modalAgeOpen);

  // El theme con los estilos globales podría ir en un archivo aparte
  const theme = {
    color: {
      primary: "#161314",
      secondary: "#2B2628",
      // complementary es un mejor name
      tertiary: "#F4F3F3",
    },
    font: "Cormorant",
    colors: {
      primary: "#FF8126",
      body: "#FFFFFF",
      warning: {
        background: "#C2E8CE",
        text: "#1F1F1F",
      },
      button: "#FFFFFF",
      latestOffers: {
        background: "#F7F5F0",
        oldPrice: "#656565",
      },
      ourPartner: "#6090C3",
    },
    fonts: {
      primary: "'Poppins', sans-serif",
      secondary: "'Cormorant', serif",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContadorContext.Provider value={{cont, setCount}}>
        <NavBar />
        <Hero />
        <Wines />
        <Gallery />
        <Form />
        <FooterContainer />
        {modalAgeOpen && <ModalAge onConfirm={modalAgeHandler} />}
      </ContadorContext.Provider>
    </ThemeProvider>
  );
}

export default App;
