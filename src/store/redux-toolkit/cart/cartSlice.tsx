import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CarState {
  numberOfItems: number;
  items: Map<string, any>;
}

// Define the initial state using that type
const initialState: CarState = {
  numberOfItems: 0,
  items: new Map()
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state) => {
      state.numberOfItems += 1;
    }, 
    incrementProduct: (state) => {

    },
    decrementProduct: (state) => {

    },
    deleteProduct: (state) => {

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {

    },
  },
})

export const { 
  addToCart,
  incrementProduct, 
  decrementProduct, 
  deleteProduct, 
  incrementByAmount } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNumberOfCartItems = (state: RootState) => state.cart.numberOfItems;

export default cartSlice.reducer