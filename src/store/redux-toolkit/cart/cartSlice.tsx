import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state

export interface ProductItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItems {
  [key: number]: ProductItem
}

interface CarState {
  numberOfItems: number;
  items: CartItems;
  itemOrder: number[];
}

// Define the initial state using that type
const initialState: CarState = {
  numberOfItems: 0,
  items: {},
  itemOrder: []
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItem>) => {
      state.numberOfItems += action.payload.quantity;
      state.items[action.payload.id] = action.payload;
      state.itemOrder.push(action.payload.id);
    }, 
    incrementProduct: (state, action: PayloadAction<{id: number}>) => {
      state.items[action.payload.id].quantity++;
    },
    decrementProduct: (state, action: PayloadAction<{id: number}>) => {
      state.items[action.payload.id].quantity--;
    },
    deleteProduct: (state, action: PayloadAction<{id: number}>) => {
      delete state.items[action.payload.id];

      const indexToRemove = state.itemOrder.indexOf(action.payload.id);
      state.itemOrder.splice(indexToRemove, 1); 

    }
  },
})

export const { 
  addToCart,
  incrementProduct, 
  decrementProduct, 
  deleteProduct, 
} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNumberOfCartItems = (state: RootState) => state.cart.numberOfItems;
export const selectItems = (state: RootState) => state.cart.items;
export const selectItemOrder = (state: RootState) => state.cart.itemOrder;

export default cartSlice.reducer