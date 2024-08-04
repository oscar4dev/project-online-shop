import React, { useState } from 'react'
import Star from './Star'
import styled from 'styled-components'

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   font-size: 1rem;
`

const StyledSpan = styled.span`
   display: block;
   margin-left: 0.5em;
`

function StarRating({ maxLength, defaultRating, setMyRating }) {

   const [rating, setRating] = useState(defaultRating)
   const [tempRating, setTempRating] = useState(0)

   function handleRating (rating) {
      setRating(rating)
      setMyRating(rating)
   }

   return (
      <StyledContainer>
         { Array.from({ length: maxLength }, (_, i) => {
            return <Star 
               key={ i }
               full={ tempRating ? tempRating >= i + 1 : rating >= i + 1 }
               onClick={ () => handleRating(i + 1) }
               onMouseEnter={ () => setTempRating(i + 1) }
               onMouseLeave={ () => setTempRating(0) }
            />
         }) }
         <StyledSpan>{ tempRating ? tempRating : rating || '' }</StyledSpan>
      </StyledContainer>
   )
}

export default StarRating