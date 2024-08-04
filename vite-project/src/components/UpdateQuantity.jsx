import React from 'react'
import { useDispatch } from 'react-redux'
import { decItemQty, incItemQty } from './cartSlice'
import styled from 'styled-components'

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 0.5em 0;
   gap: 1em;
`

const StyledBtn = styled.button`
   height: 25px;
   width: 25px;
   border-radius: 50%;
   border: 1px solid;
   background-color: #bfdbfe;
   color: #1e40af;

   &:hover{
      background-color: #93c5fd;
   }
`

const StyledSpan = styled.span`
   font-weight: bold;
   font-size: 1rem;
`


function UpdateQuantity({ id, currentQuantity }) {

   const dispatch = useDispatch()

   return (
      <StyledContainer>
         <StyledBtn
            onClick={ () => dispatch(decItemQty(id)) }
         >-</StyledBtn>

         <StyledSpan>{ currentQuantity }</StyledSpan>

         <StyledBtn
            onClick={ () => dispatch(incItemQty(id)) }
         >+</StyledBtn>
      </StyledContainer> 
   )
}

export default UpdateQuantity