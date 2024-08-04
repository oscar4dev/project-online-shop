import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'
import CartOverview from './CartOverview'
import styled from 'styled-components'

const AppLayoutStyles = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100vh;
`

const StyledHeader = styled.header`
   background-color: #2563eb;
   color: #f1f5f9;
   z-index: 10;
`

const StyledFooter = styled.footer`
   z-index: 10;
`

const StyledMain = styled.main`
   height: 100%;
   overflow: scroll;
`

function AppLayout() {

   const navigation = useNavigation()
   const isLoading = navigation.state === 'loading'  

   return (
      <AppLayoutStyles>
         <StyledHeader>
            <Header />
         </StyledHeader>

         <StyledMain>
            { isLoading && <Loader /> }
            <Outlet />
         </StyledMain>

         <StyledFooter>
            <CartOverview />
         </StyledFooter>
      </AppLayoutStyles>
   )
}

export default AppLayout