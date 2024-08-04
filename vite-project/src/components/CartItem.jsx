import React from 'react'
import { formatCurrency } from '../utils'
import UpdateQuantity from './UpdateQuantity'
import DeleteBtn from './DeleteBtn'
import { useSelector } from 'react-redux'
import { getCurrentQuantityById } from './cartSlice'
import styled from 'styled-components'

const StyledList = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #e5e7eb;
   padding: 0.5em;

   @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
   }
`

const TopContainer = styled.div`
   display: flex;
   gap: 0.9em;
   font-weight: bold;

   @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      width: 100%;
      font-size: 1.2rem;
   }
`

const BottomContainer = styled.div`
   display: flex;
   justify-content: center;
   gap: 1.5em;
   align-items: center;
   font-weight: bold;
   margin-top: 0.5em;
   width: 70%;

   @media (min-width: 425px) {
      gap: 0;
      justify-content: space-evenly;
   }
`

function CartItem({ item }) {

   const {
      name, pizzaId, quantity, totalPrice, unitPrice 
   } = item

   const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

   return (
      <StyledList>
         <TopContainer>
            <span>{ quantity }x</span>
            <span>{ name }</span>
            <span>{ formatCurrency(totalPrice) }</span>
         </TopContainer>

         <BottomContainer>
            <UpdateQuantity 
               id={ pizzaId }
               currentQuantity={ currentQuantity } 
            />
            <DeleteBtn id={ pizzaId } />
         </BottomContainer>
      </StyledList>
   )
}

export default CartItem