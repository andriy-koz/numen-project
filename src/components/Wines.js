import axios from "axios";
import React, {useEffect, useState} from "react";

import {ImgText, StyledCards, StyledWinesContainer} from "../styles/StyledWines";

import Contador from "./Contador";

const Wines = () => {
  // ¿LLamando una función aún no declarada? Mover useEffect abajo
  useEffect(() => {
    getVinos();
  }, []);

  const [vinos, setVinos] = useState([]);

  //  Declara llamadas de tipo fetch dentro del useEffect
  const getVinos = async () => {
    try {
      // Si utilizan async deben utilizar await. Si utilizan then, este
      // método no retorna nada y además no necesitan el async
      const res = axios.get("http://localhost:3006/vinos").then((res) => {
        setVinos(res.data);
      });
    } catch (error) {
      // Falta manejar el error y el loading en la UI
      alert("error");
    }
  };

  return (
    <div
      style={{
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#161314",
        paddingTop: "30px",
      }}
    >
      <h2 id="vinos">Vinos más vendidos del mes</h2>
      <h4>Top Selling Wines this Month</h4>
      {/* ¿Qué hace este div perdido? 😅 */}
      {/* <div> */}
      <StyledWinesContainer>
        {/* Usar () para que qude más prolijo el renderizado de cada vino */}
        {vinos.map((vino) => (
          <StyledCards key={vino.id}>
            <img alt="" src={vino.img} />
            <ImgText>Prod.:{vino.nombre}</ImgText>
            <ImgText>${vino.precio} </ImgText>
            <Contador />
          </StyledCards>
        ))}
      </StyledWinesContainer>
      {/* </div> */}
    </div>
  );
};

export default Wines;
