import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'
import styled from 'styled-components'

const StyledBtn = styled.button`
   text-transform: uppercase;
   font-size: 0.7rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 0.6em;
   background-color: #fecaca;
   color: #111827;
   border: none;
   margin-top: 0.5em;
   width: 85px;

   &:hover {
      background-color: #fca5a5;
   }
`

function DeleteBtn({ id }) {

   const dispatch = useDispatch()

   return (
      <StyledBtn
         onClick={ () => dispatch(deleteItem(id)) }
         >delete
      </StyledBtn>
   )
} 

export default DeleteBtn