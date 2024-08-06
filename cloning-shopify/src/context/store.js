import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice'; 
import searchTermReducer from './slices/searchTermSlice';
import { loadCartState } from '../utils/localstorage'; 

// Load pre-existing cart state from local storage
const preloadedState = {
  cart: loadCartState() || { items: [] },
};

// Configure the Redux store
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    searchTerm: searchTermReducer
  },
  preloadedState
});

export default store;
