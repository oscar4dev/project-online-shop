import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/userSlice";
import cartSlice from "./components/cartSlice";

const store = configureStore({
   reducer: {
      user: userSlice,
      cart: cartSlice,
   }
})

export default store