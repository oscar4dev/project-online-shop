import React from 'react'
import { formatCurrency } from '../utils';
import styled from 'styled-components';

const StyledList = styled.li`
   background-color: #e5e7eb;
   padding: 1em;
   display: flex;
   align-items: center;
   gap: 1em;
`

const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 1em;
`

function OrderItem({ item }) {
   
   const { name, quantity, unitPrice } = item
   return (
      <StyledList>
         <Container>
            <span>{ quantity }x</span>
            <span>{ name }</span>
         </Container>
         <span>{ formatCurrency(unitPrice) }</span>
      </StyledList>
   )
}

export default OrderItem