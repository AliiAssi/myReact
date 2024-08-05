import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "light",
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    }
  },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
