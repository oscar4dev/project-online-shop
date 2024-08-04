import { createGlobalStyle } from "styled-components";

const GlogalStyles = createGlobalStyle`
   *, *::before, *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
   }
   button {
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
   }
   body {
      background-color: #f8fafc;
      color: #111827;
   }
`

export default GlogalStyles