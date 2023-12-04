import { configureStore } from '@reduxjs/toolkit'
import buda_folmal_bir_seydi from './counterSlice'

export const store = configureStore({
  reducer: {
    buadlazim_deyil: buda_folmal_bir_seydi,
  },
})