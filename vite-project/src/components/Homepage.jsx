import React from 'react'
import CreateUser from './CreateUser'
import { useSelector } from 'react-redux'
import { getUsername } from './userSlice'
import { useNavigate } from 'react-router-dom'
import StyledSection from '../styles/StyledSection'
import StyledText from '../styles/StyledText'
import styled from 'styled-components'

const StyledSpan = styled.span`
   margin-top: 0.5em;
   display: block;
   color: #1e40af;
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
   width: 70%;
   transition: background-color 0.3s ease-in-out;

   &:hover {
      background-color: #1d4ed8;
   }

   @media (min-width: 768px) {
      font-size: 1.2rem;
      width: 100%;
   }
`

const Container = styled.div`
   padding-top: 1em;
   display: flex;
   flex-direction: column;
   gap: 1em;
   height: 300px;
   max-width: 768px;
   margin: 0 auto;

   @media (min-width: 768px) {
      flex-direction: row;
      margin-top: 2em;
   };
`

const StyledDiv = styled.div`
   width: 100%;
   height: 2px;
   background-color: #1e40af;
   margin: 1em 0;
   
   @media (min-width: 768px) {
      width: 4px;
      height: 90%;
   }
`

const Wrapper = styled.div`
   @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`

function Homepage() {

   const username = useSelector(getUsername)
   const navigate = useNavigate()

   function handleContinue () {
      navigate('/menu')
   }

   return (
      <StyledSection>
         <Container>
            <StyledText as='h1'>
               No. 1 shopping destination. <br />
               <StyledSpan> Shop for everything you need.</StyledSpan>
            </StyledText>
            <StyledDiv />
            <Wrapper>
               {
                  !username
                  ? <CreateUser />
                  : <StyledBtn onClick={ handleContinue }>
                        continue &rarr;
                     </StyledBtn>
               }
            </Wrapper>
         </Container>
      </StyledSection>
   )
}

export default Homepage