import styled, { css } from "styled-components";

const StyledText = styled.h1`
   ${ (props) => props.as === 'h1' && css`
      text-align: center;
      font-size: 2rem;
      margin-top: 0.5em;

      @media (min-width: 768px) {
      font-size: 2.5rem;
      text-align: start;
      /* margin-top: 2em; */
   }
   ` }

   ${ (props) => props.as === 'h2' && css`
      font-size: 1.5rem;
      text-align: center;

      @media (min-width: 768px) {
         font-size: 2rem;
      }
   `}
`
export default StyledText