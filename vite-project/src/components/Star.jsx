import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import styled from 'styled-components';

const StyledSpan = styled.span`
   display: flex;
   align-items: center;
   color: #eab308;
   margin-right: 0.1em;
   padding: 0.1em 0;
`

function Star({ full, onClick, onMouseEnter, onMouseLeave }) {
   return (
      <StyledSpan
         onClick={ onClick }
         onMouseEnter={ onMouseEnter }
         onMouseLeave={ onMouseLeave }
      >
         { 
            full 
               ? <FaStar /> 
               : <FaRegStar />
         }
      </StyledSpan>
   )
}

export default Star