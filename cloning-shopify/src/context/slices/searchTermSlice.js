import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '', // Initialize with an empty string
};

const termSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTerm } = termSlice.actions;
export default termSlice.reducer;
