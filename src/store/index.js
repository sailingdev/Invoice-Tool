import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './Invoice/invoiceSlice'

const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
  devTools: true,
})
export default store
