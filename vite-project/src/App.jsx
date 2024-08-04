import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout';
import Homepage from './components/Homepage';
import Menu, { loader as menuLoader } from './components/Menu';
import Cart from './components/Cart';
import CreateOrder, { action as createOrderAction } from './components/CreateOrder';
import Order, { loader as orderLoader } from './components/Order';
import { action as orderAction } from './components/MakePriority'
import Error from './components/Error';
import GlogalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        action: orderAction,
        errorElement: <Error />,
      },
    ]
  },
])

const AppStyles = styled.div`
  height: 100vh;
`

function App() {
    return (
      <AppStyles>
        <GlogalStyles />
        <RouterProvider router={ router } />
      </AppStyles>
    ) 
}

export default App
