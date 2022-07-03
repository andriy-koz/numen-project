import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body{
  font-family: ${(props) => props.theme.font}, sans-serif;
  font-family: 'Roboto Flex', sans-serif;
  overflow-x: hidden;
}`;
