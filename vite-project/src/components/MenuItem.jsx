import React, { useState } from 'react'
import { formatCurrency } from '../utils'
import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from './cartSlice'
import DeleteBtn from './DeleteBtn'
import UpdateQuantity from './UpdateQuantity'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";

const ProductTile = styled.li`
   overflow: hidden;
   box-shadow: 0 0 5px black;
   border-radius: 10px;
   background-color: #e5e7eb;
   width: 134px;
   min-width: 134px;
   height: 320px;
   display: flex;
   flex-direction: column;
   
   @media (min-width: 375px) {
      height: 340px;
      width: 161px;
      min-width: 161px;
   }
   
   @media (min-width: 425px) {
      height: 330px;
      width: 186px;
      min-width: 186px;
   }
   
   @media (min-width: 768px) {
      height: 320px;
      width: 220px;
      min-width: 220px;
   }
`

const ImageContainer = styled.div`
   height: 20%;
   width: 100%;

   @media (min-width: 375px) {
      height: 30%;
   }

   @media (min-width: 768px) {
      height: 40%;
   }
`

const LowerContainer = styled.div`
   height: 80%;
   width: 100%;
   font-size: 0.8rem;
   padding: 0.5em;
`

const StyledImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: contain;
`

const StyledSpan = styled.span`
   display: block;
   margin-bottom: 0.3em;
`

const BoldText = styled.span`
   font-weight: bold;
`

const StyledBtn = styled.button`
   display: block;
   margin: 0 auto;
   text-transform: uppercase;
   font-size: 0.7rem;
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
`

const PrevPrice = styled.span`
   text-decoration: line-through;
   margin-left: 3px;
`

const NewPrice = styled.span`
   font-size: 1rem;
   font-weight: bold;
`

const StyledStar = styled.span`
   color: #eab308;
   margin-left: 3px;
`

const IsInCartContainer = styled.div`
   @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5em;
   }
`

function MenuItem({ item }) {

   const { 
      img, 
      title, 
      prevPrice, 
      newPrice, 
      soldOut, 
      reviews, 
      company ,
      id
   } = item

   const [myRating, setMyRating] = useState(0)
   
   const currentQuantity = useSelector(getCurrentQuantityById(id))
   const isInCart = currentQuantity > 0

   const dispatch = useDispatch()

   function handleAddToCart () {
      const newItem = {
         pizzaId: id,
         name: title,
         quantity: 1,
         unitPrice: newPrice,
         totalPrice: newPrice * 1,
      }

      dispatch(addItem(newItem))
   }

   return (
      <ProductTile>
         <ImageContainer>
            <StyledImage src={ img } alt={ title } />
         </ImageContainer>
         <LowerContainer>
            <StyledSpan>Product name: <BoldText>{ title }</BoldText></StyledSpan>
            {
               soldOut
               ? <span>Sold out</span>
               :
               <>
                     <span>
                        Previous price: 
                        <PrevPrice> { formatCurrency(prevPrice) }</PrevPrice>
                     </span>
                     <StyledSpan>
                        New price: <NewPrice>{ formatCurrency(newPrice) }</NewPrice>
                     </StyledSpan>
                  </>
            }
            <StyledSpan>Sold by <BoldText>{ company }</BoldText></StyledSpan>
            <StyledSpan>{ reviews }</StyledSpan>
            <StarRating 
               maxLength={ 5 }
               defaultRating={ 0 }
               setMyRating={ setMyRating }
            />
            {
               myRating === 0
                  ? <p>Rate this item...</p>
                  : <p>
                        You have rated this item { myRating } 
                        <StyledStar><FaStar /></StyledStar>
                     </p>
            }
            { 
               !soldOut && !isInCart
                  && <StyledBtn
                        onClick={ handleAddToCart }
                        >add to cart
                     </StyledBtn>  
            }
            {
               isInCart 
                  && <IsInCartContainer>
                     <UpdateQuantity 
                        id={ id } 
                        currentQuantity={ currentQuantity } 
                     />
                     <DeleteBtn id={ id } />
                  </IsInCartContainer>

            }
         </LowerContainer>
      </ProductTile>
   )
}

export default MenuItem