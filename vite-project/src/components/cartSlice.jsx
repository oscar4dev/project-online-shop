import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cart: [],
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem(state, action) {
         state.cart.push(action.payload)
      },

      deleteItem(state, action) {
         state.cart = state.cart.filter((item) => {
            return item.pizzaId !== action.payload
         })
      },

      incItemQty(state, action) {
         const item = state.cart.find((item) => {
            return item.pizzaId === action.payload
         })

         item.quantity++
         item.totalPrice = item.quantity * item.unitPrice
      },
      
      decItemQty(state, action) {
         const item = state.cart.find((item) => {
            return item.pizzaId === action.payload
         })
         
         item.quantity--
         item.totalPrice = item.quantity * item.unitPrice

         if (item.quantity === 0) 
            cartSlice.caseReducers.deleteItem(state, action)
      },

      clearCart(state) {
         state.cart = []
      },
   }
})

export const {
   addItem, deleteItem, incItemQty, decItemQty, clearCart
} = cartSlice.actions

export default cartSlice.reducer

export function getCart (state) {
   return state.cart.cart
}

export function getTotalPrice (state) {
   return state.cart.cart.reduce((total, cur) => {
      return total + cur.totalPrice
   }, 0)
}

export function getTotalQuantity (state) {
   return state.cart.cart.reduce((total, cur) => {
      return total + cur.quantity
   }, 0)
}

export const getCurrentQuantityById = (id) => (state) =>
   state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
