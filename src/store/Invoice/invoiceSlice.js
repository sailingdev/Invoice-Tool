import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  newItem: {},
}

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    updateCustomerDetails: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.newItem = {
        ...state.newItem,
        customerDetails: action.payload,
      }
    },
    updateProductDetails: (state, action) => {
      state.newItem = {
        ...state.newItem,
        productDetails: action.payload,
      }
    },
    addInvoiceItem: (state) => {
      state.items = [...state.items, state.newItem]
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCustomerDetails, updateProductDetails, addInvoiceItem } =
  invoiceSlice.actions

export default invoiceSlice.reducer
