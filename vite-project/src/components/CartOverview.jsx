import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCart, getTotalPrice, getTotalQuantity } from './cartSlice'
import { formatCurrency } from '../utils'
import styled from 'styled-components'

const StyledContainer = styled.div`
   background-color: #2563eb;
   color: #f1f5f9;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1em 0.5em;
   text-transform: uppercase;
   font-size: 0.8rem;
   letter-spacing: 1.5px;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const StyledInnerContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.7em;
   text-transform: uppercase;
`

const StyledLink = styled(Link)`
   color: #f1f5f9;
   text-decoration: none;
   padding: 0 0.2em;
   display: flex;
   align-items: center;

   &:hover {
      text-decoration: underline;
   }
`

function CartOverview() {

   const totalPrice = useSelector(getTotalPrice)
   const totalQuantity = useSelector(getTotalQuantity)
   const cart = useSelector(getCart)

   if (!cart.length) return

   return (
      <StyledContainer> 
         <StyledInnerContainer>
            <span>
               { totalQuantity }
               { cart.length === 1 ? ' item' : ' items' }
            </span>
            <span>Price: { formatCurrency(totalPrice) }</span>
         </StyledInnerContainer>
         <StyledLink to='/cart'> open cart</StyledLink>
      </StyledContainer>
   )
}

export default CartOverview