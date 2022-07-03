import styled from "styled-components";

export const EjemploParrafo = styled.div`
  color: white;
  background: lightgreen;
`;

export const EjemploBoton = styled.div`
  height: 20rem;
  width: 20rem;
`;
export const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const BotonAdd = styled.button`
  background: #7e1b22;
  color: #fff;
  padding: 10px 20px;
  letter-spacing: 3px;
  font-weight: 500;
  border: 1px solid #7e1b22;
  margin: 10px;
  align-self: center;
  margin-top: -30px;
  &:hover {
    cursor: pointer;
    background-color: #826a45;
    border: 1px solid #826a45;
  }
`;

export const Boton = styled.button`
  background: #7e1b22;
  color: #fff;
  padding: 10px;
  letter-spacing: 3px;
  font-weight: 500;
  border: 1px solid #7e1b22;
  margin: 10px;
  align-self: center;
  &:hover {
    cursor: pointer;
    background-color: #826a45;
    border: 1px solid #826a45;
  }
`;

export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #000;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
