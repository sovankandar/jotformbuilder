import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { FormComponentType } from '@/types/types'

interface FormState {
  components: FormComponentType[]
  selectedComponent: FormComponentType | null
  isPreview: boolean
}

const initialState: FormState = {
  components: [],
  selectedComponent: null,
  isPreview: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<FormComponentType>) => {
      state.components.push(action.payload)
    },
    updateComponent: (state, action: PayloadAction<FormComponentType>) => {
      const index = state.components.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state.components[index] = action.payload
      }
    },
    deleteComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter(c => c.id !== action.payload)
    },
    setSelectedComponent: (state, action: PayloadAction<FormComponentType | null>) => {
      state.selectedComponent = action.payload
    },
    togglePreview: (state) => {
      state.isPreview = !state.isPreview
    },
  },
})

export const { addComponent, updateComponent, deleteComponent, setSelectedComponent, togglePreview } = formSlice.actions
export default formSlice.reducer