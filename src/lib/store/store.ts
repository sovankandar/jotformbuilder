import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'
import { initializeComponents } from '@/components/FormBuilder/register-components'

// Initialize components before creating store
initializeComponents()

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch