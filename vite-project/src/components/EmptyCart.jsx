import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
   padding: 1em;
   max-width: 768px;
   margin: 0 auto;
`

const StyledLink = styled(Link)`
   color: #1e40af;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }
`

const StyledSpan = styled.span`
   display: block;
   font-weight: bold;
   margin: 1em 0;
`

function EmptyCart() {
   return (
      <Container>
         <StyledSpan>
            <StyledLink to='/menu'>&larr; Back to menu</StyledLink>
         </StyledSpan>
         <p>
            Your cart is empty. You can go to the
            <StyledLink to='/menu'> menu</StyledLink> to add some items.
         </p>
      </Container>
   )
}

export default EmptyCart