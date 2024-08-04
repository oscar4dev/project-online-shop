import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingBag } from "react-icons/fa";

const StyledLink = styled(Link)`
   color: #f1f5f9;
   text-decoration: none;
   font-size: 1.2em;
   font-weight: bold;
   display: flex;
   align-items: center;

   &:hover {
      text-decoration: underline;
   }
`

const StyledSpan = styled.span`
   color: #facc15;
   font-size: 1.3rem;
`

function Logo() {
   return (
      <StyledLink to='/'>
         <StyledSpan>
            <FaShoppingBag />
         </StyledSpan>
         buyMore
      </StyledLink>
   )
}

export default Logo