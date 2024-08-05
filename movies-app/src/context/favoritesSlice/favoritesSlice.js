import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    append: (state, action) => {
      if (!state.value.find(item => item.imdbID === action.payload.imdbID)) {
        state.value.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter((item) => item.imdbID !== action.payload.imdbID);
    }
  },
});

export const { append, remove } = favoritesSlice.actions;
export default favoritesSlice.reducer;
