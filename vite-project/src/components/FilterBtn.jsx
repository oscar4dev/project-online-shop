import React from 'react'
import styled from 'styled-components'

const StyledFilterButton = styled.button`
   color: #2563eb;
   background-color: #bfdbfe;
   text-transform: uppercase;
   font-size: 0.7rem;
   font-weight: bold;
   letter-spacing: 1.5px;
   padding: 0.4em 0.6em;
   border: 1px solid;

   &:hover {
      background-color: #93c5fd;
   }
`

function FilterBtn({ children, onClick }) {
   return (
      <div>
         <StyledFilterButton onClick={ onClick }>{ children }

         </StyledFilterButton>
      </div>
   )
}

export default FilterBtn