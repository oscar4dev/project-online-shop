import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { clearCart, getCart, getTotalPrice } from './cartSlice';
import { getUsername } from './userSlice';
import { createOrder } from '../services/shoppingApi';
import { formatCurrency } from '../utils';
import store from '../store'
import styled from 'styled-components';
import Spinner from '/SpinnerButton.gif'

const Container = styled.div`
   padding: 1em;
   max-width: 768px;
   margin: 0 auto;

   @media (min-width: 768px) {
      padding: 3em;
   }
`

const StyledHeader = styled.h2`
   margin: 0.5em 0;
   text-align: center;

   @media (min-width: 768px) {
      font-size: 2rem;
      margin: 0 0 1em 0;
   }
`

const FormInnerContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 1em;

   @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
   }
`

const StyledInput = styled.input`
   padding: 0.7em;
   border: 1px solid #1e40af;

   @media (min-width: 768px) {
      width: 80%;
      padding: 0.6em;
   }
`

const StyledLabel = styled.label`
   font-weight: bold;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const StyledSpan = styled.span`
   font-size: 0.8rem;
   color: #dc2626;

   @media (min-width: 768px) {
      font-size: 1rem;
      
   }
`

const StyledCheckboxContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5em;
   margin-bottom: 2em;

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

const StyledBtn = styled.button`
   display: block;
   margin: 0 auto;
   text-transform: uppercase;
   font-size: 1rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 1em;
   background-color: #2563eb;
   color: #f1f5f9;
   border: none;
   margin-top: 1em;
   width: 100%;

   &:hover {
      background-color: #1d4ed8;
   }

   @media (min-width: 768px) {
      width: 70%;
   }
`

const isValidPhone = (str) =>
   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
   str
);

function CreateOrder() {

   const [priority, setPriority] = useState(false)

   const cart = useSelector(getCart)
   const username = useSelector(getUsername)
   const totalPrice = useSelector(getTotalPrice)
   const formErrors = useActionData()
   const navigation = useNavigation()
   const isSubmitting = navigation.state === 'submitting'

   const priorityPrice = priority ? totalPrice * 0.2 : 0
   const grandTotal = totalPrice + priorityPrice

   return (
      <Container>
         <StyledHeader>Ready to order? Let's go!</StyledHeader>
         <Form method='POST'>
            <FormInnerContainer>
               <StyledLabel htmlFor="customer">First name</StyledLabel>
               <StyledInput 
                  type="text" 
                  id='customer'
                  name='customer'
                  required
                  defaultValue={ username }
               />
            </FormInnerContainer>

            <FormInnerContainer>
               <StyledLabel htmlFor="phone">Phone number</StyledLabel>
               <StyledInput 
                  type="text"
                  id='phone'
                  name='phone' 
                  required
               />
               { 
                  formErrors?.phone 
                     && <StyledSpan>{ formErrors.phone }</StyledSpan> 
               }
            </FormInnerContainer>

            <FormInnerContainer>
               <StyledLabel htmlFor="address">Address</StyledLabel>
               <StyledInput 
                  type="text"
                  id='address'
                  name='address' 
                  required
               />
            </FormInnerContainer>

            <StyledCheckboxContainer>
               <input 
                  type="checkbox"
                  id='priority'
                  name='priority' 
                  value={ priority }
                  onChange={ (e) => setPriority(e.target.checked) }
               />
               <label htmlFor="priority">Make your order a priority</label>
            </StyledCheckboxContainer>

            <div>
               <input 
                  type="hidden"
                  name='cart'
                  value={ JSON.stringify(cart) } 
               />
               <StyledBtn>
                  { isSubmitting 
                     ? <>
                        <span>
                           Placing order... 
                           <img src={ Spinner } alt="loading spinner" width={25} />
                        </span>
                     </>
                     : `order now from ${ formatCurrency(grandTotal) }` 
                  }
               </StyledBtn>
            </div>
         </Form>
      </Container>
   )
}

export async function action ({ request }) {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)

   const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === 'true'
   }

   const errors = {}
   if (!isValidPhone(order.phone))
      errors.phone = `Please provide a valid phone number. We 
      might need it to contact you.`

   if (Object.keys(errors).length > 0) return errors

   const newOrder = await createOrder(order)

   store.dispatch(clearCart())

   return redirect(`/order/${ newOrder.id }`)
}

export default CreateOrder