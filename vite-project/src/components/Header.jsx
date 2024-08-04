import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import User from './User'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";
import styled from 'styled-components'

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.3em;
   padding: 0.5em;
   width: 100%;
   
   @media (min-width: 768px) {
      padding: 1em;
   }
`

const StyledInnerContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const StyledLink = styled(Link)`
   color: unset;
   font-size: 1.3rem;
`

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 0.5em;
   font-weight: bold;
`

function Header() {

   return (
      <StyledContainer>
         <StyledInnerContainer>
            <Logo />
            <Wrapper>
               <User />
               <StyledLink to='/cart'>
                  <IoCartOutline />
               </StyledLink>
            </Wrapper>
         </StyledInnerContainer>
         <SearchBar />
      </StyledContainer>
   )
}

export default Header