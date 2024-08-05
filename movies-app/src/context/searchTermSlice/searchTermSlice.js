import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
};

const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
