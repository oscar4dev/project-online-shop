import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { updateUsername } from './userSlice';
import StyledText from '../styles/StyledText';
import styled from 'styled-components';

const StyledForm = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1em;
   max-width: 768px;
   margin: 0 auto;
`

const StyledInput = styled.input`
   width: 100%;
   padding: 0.7em 1em;
   font-size: 1rem;
   border: 1px solid #1e40af;
   display: block;
   margin: 1em 0;
   
   
   @media (min-width: 768px) {
      padding: 0.9em 1.5em;
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
   width: 70%;
   transition: background-color 0.3s ease-in-out;

   &:hover {
      background-color: #1d4ed8;
   }

   @media (min-width: 768px) {
      font-size: 1.2rem;
   }
`

function CreateUser() {

   const [username, setUsername] = useState('')

   const navigate = useNavigate()
   const dispatch = useDispatch()
   const navigation = useNavigation()
   const isLoading = navigation.state === 'submitting'

   function handleSubmit (e) {
      e.preventDefault()
      if (!username) return
      dispatch(updateUsername(username))
      navigate('/menu')
   }

   return (
      <StyledForm onSubmit={ handleSubmit }>
         <StyledText as='h2'>
            👋 Welcome! Please start by telling us your name.
         </StyledText>
         <StyledInput 
            type="text"
            placeholder='Eg John' 
            value={ username }
            onChange={ (e) => setUsername(e.target.value) }
         />
         {  
            username.length !== 0 &&
            <StyledBtn
               disabled={ isLoading }
            >start shopping</StyledBtn>
         }
      </StyledForm>
   )
}

export default CreateUser