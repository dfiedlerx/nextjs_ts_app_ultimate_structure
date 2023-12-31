import { createSlice } from '@reduxjs/toolkit'

import CounterState from '@/types/redux/features/counter.type'

const initialState = {
  value: 0,
} as CounterState

const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    /* with value example
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    */
  },
})

export const { increment, decrement, reset } = counter.actions
export default counter.reducer
