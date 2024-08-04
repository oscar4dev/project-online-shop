import React from 'react'
import { useSelector } from 'react-redux'
import { getUsername } from './userSlice'
import { FaRegUser } from "react-icons/fa6";
import styled from 'styled-components';

const StyledSpan1 = styled.span`
   font-size: 0.8em;
`

const StyledSpan2 = styled.span`
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 1.5px;
`

const StyledContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.3em;
`


function User() {

   const username = useSelector(getUsername)

   return (
      <StyledContainer>
         { username ? username : <FaRegUser /> }
         {/* <StyledSpan1>
            <FaRegUser />
         </StyledSpan1>
         <StyledSpan2>{ username }</StyledSpan2> */}
      </StyledContainer>
   )
}

export default User