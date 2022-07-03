import styled from "styled-components";
// Necesitan tener los estilos con una misma y unificada convención
// Por ejemplo, podrían tener una carpeta de estilos globales, y luego
// Por cada componente una carpeta, y dentro un archivo de lógica y otro
// de estilos.
// Tambien unificar criterios de lenguaje. Spanish o English
export const StyledWinesContainer = styled.div`
  background-color: #161314;
  display: flex;
  justify-items: center;
  align-items: center;
  /* flex-wrap:wrap; */
  max-width: 1200px;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const StyledCards = styled.div`
  width: 250px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  background-color: #201d1e;
  img {
    width: 80%;
    height: 80%;
    margin-left: 20px;
  }
`;

export const ImgText = styled.h5`
  text-align: center;
  margin-top: 5px;
`;
