import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled.form`
   width: 100%;
`

const StyledInput = styled.input`
   width: 100%;
   padding: 0.7em 0.3em;
   border: 1px solid #1e40af;
   font-size: 1rem;

   @media (min-width: 768px) {
      padding: 1em;
   }
`

function SearchBar() {

   const [query, setQuery] = useState('')
   const navigate = useNavigate()

   function handleSubmit (e) {
      e.preventDefault()
      if (!query) return
      navigate(`/order/${ query }`)
      setQuery('')
   }

   return (
      <StyledForm onSubmit={ handleSubmit }>
         <StyledInput 
            type="text" 
            placeholder='Search order #'
            value={ query }
            onChange={ (e) => setQuery(e.target.value) }
         />
      </StyledForm>
   )
}

export default SearchBar