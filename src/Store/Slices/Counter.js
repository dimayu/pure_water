import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
  },
  reducers: {
    increment(state) {
      if (state.count < 10) {
        state.count = state.count + 1;
      }
    },
    decrement(state) {
      if (state.count > 1) {
        state.count = state.count - 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
