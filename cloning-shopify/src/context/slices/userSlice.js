import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('user')) || null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    resetUser: (state) => {
      state.value = null;
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
