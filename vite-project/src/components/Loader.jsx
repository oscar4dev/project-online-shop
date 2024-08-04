import React from 'react'
import Spinner from '../../public/Spinner.gif'
import styled from 'styled-components'

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

function Loader() {
   return (
      <Container>
         <div>
            <img src={ Spinner } alt="loading spinner" />
         </div>
      </Container>
   )
}

export default Loader