import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

body {
  font-family: ${(props) => props.theme.font}, sans-serif;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.color.primary};
}`;
