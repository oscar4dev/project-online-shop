import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { getUsername } from './userSlice'
import { clearCart, getCart } from './cartSlice'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import styled from 'styled-components'
import StyledText from '../styles/StyledText'

const Container = styled.div`
   padding: 1em;
   max-width: 768px;
   margin: 0 auto;

   @media (min-width: 768px) {
      padding: 3em;
   }
`

const StyledLink = styled(Link)`
   color: #2563eb;
   font-weight: bold;
   text-transform: uppercase;
   font-size: 0.9rem;
   margin-bottom: 1em;
   display: inline-block;
   letter-spacing: 1.5px;
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const StyledUlist = styled.ul`
   list-style-type: none;
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: column;
   gap: 1em;
   margin-top: 1em;
`

const BtnContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1em;
   padding: 1em 0;
   margin: 1em auto;

   @media (min-width: 768px) {
      width: 90%;
   }
`

const OrderBtn = styled.button`
   text-transform: uppercase;
   font-size: 0.7rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 1em;
   background-color: #2563eb;
   color: #f1f5f9;
   border: none;
   margin-top: 0.5em;
   width: 45%;

   &:hover {
      background-color: #1d4ed8;
   }

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const ClearBtn = styled.button`
   text-transform: uppercase;
   font-size: 0.7rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 1em;
   background-color: #e2e8f0;
   color: #111827;
   border: none;
   margin-top: 0.5em;
   width: 45%;

   &:hover {
      background-color: #cbd5e1;
   }

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

function Cart() {

   const username = useSelector(getUsername)
   const navigate = useNavigate()
   const cart = useSelector(getCart)
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'

   function handleOrder () {
      navigate('/order/new')
   }

   function handleClearCart () {
      const confirmed = window.confirm(`
         Are you sure you want to clear your cart?
      `)

      if (confirmed) dispatch(clearCart())
   }

   if (!cart.length) return <EmptyCart />

   return (
      <Container>
         <StyledLink to='/menu'>&larr; Back to menu</StyledLink>
         <StyledText as='h2'>Your cart, { username }</StyledText>
         <StyledUlist>
            { cart.map((item) => {
               return <CartItem 
                  key={ item.pizzaId } 
                  item={ item } 
               />
            }) }
         </StyledUlist>

         <BtnContainer>
            <OrderBtn
               onClick={ handleOrder }
               >{
                  isSubmitting
                     ? 'submitting order...'
                     : 'order now'
               }
            </OrderBtn>
            <ClearBtn onClick={ handleClearCart } >
               clear cart
            </ClearBtn>
         </BtnContainer>
      </Container>
   )
}

export default Cart