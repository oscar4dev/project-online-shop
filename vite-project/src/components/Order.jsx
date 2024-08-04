import React from 'react'
import { getOrder } from '../services/shoppingApi'
import { useLoaderData } from 'react-router-dom'
import { formatCurrency } from '../utils'
import OrderItem from './OrderItem'
import MakePriority from './MakePriority'
import styled from 'styled-components'

const Container = styled.div`
   padding: 1em;
   max-width: 768px;
   margin: 0 auto;

   @media (min-width: 768px) {
      padding: 3em;
   }
`

const StyledHeader = styled.h2`
   margin-bottom: 0.5em;
   text-align: center;

   @media (min-width: 768px) {
      font-size: 2rem;
   }
`

const Wrapper = styled.div`
   background-color: #e5e7eb;
   padding: 1em;
   
`

const Container1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1em;
   text-transform: uppercase;
   font-size: 0.9rem;
   font-weight: bold;
   letter-spacing: 1.5px;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const Container2 = styled.div`
   margin: 1em 0;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const Container3 = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5em;
   margin-bottom: 1em;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const StyledSpan = styled.span`
   background-color: #166534;
   color: #f3f4f6;
   padding: 0 0.3em;
`

const StyledUList = styled.ul`
   list-style-type: none;
   padding: 0;
   margin: 0 0 1em 0;

   @media (min-width: 768px) {
      font-size: 1.2rem;
      font-weight: bold;
   }
`

function Order() {

   const order = useLoaderData()
  
   const { 
      cart, 
      customer, 
      estimatedDelivery, 
      id, 
      orderPrice ,
      priority,
      status
   } = order

   return (
      <Container>
         <Wrapper>
            <StyledHeader>{ customer }, Order #{ id }</StyledHeader>
            <Container1>
               { priority && <StyledSpan>Priority</StyledSpan> }
               <span>Status: { status }</span>
            </Container1>
         </Wrapper>

         <Container2>
            <span>Estimated Delivery Time: { estimatedDelivery }</span>
         </Container2>

         <StyledUList>
            { cart.map((item) => {
               return <OrderItem 
                  key={ item.pizzaId } 
                  item={ item } 
               />
            }) }
         </StyledUList>

         <Container3>
            <span>Item price: { formatCurrency(orderPrice) }</span>
            <span>To pay on delivery: { formatCurrency(orderPrice) }</span>
         </Container3>
         {
            !priority && <MakePriority />
         }
      </Container>
   )
}

export async function loader ({ params }) {
   const order = await getOrder(params.id)
   return order
}

export default Order