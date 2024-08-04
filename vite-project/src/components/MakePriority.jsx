import React from 'react'
import { useFetcher, useNavigation } from 'react-router-dom'
import { makePriority } from '../services/shoppingApi'
import styled from 'styled-components'

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

   @media (min-width: 768px) {
      width: 25%;
      margin: 3em 0 0 0;
   }
`

function MakePriority() {

   const fetcher = useFetcher()

   return (
      <fetcher.Form method='PATCH'>
         <StyledBtn>make priority</StyledBtn>
      </fetcher.Form>
   )
}

export async function action ({ params }) {
   const data = { priority: true }
   await makePriority(params.id, data)
   return null
}

export default MakePriority