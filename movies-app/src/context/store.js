import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './modeSlice/modeSlice';
import searchTermReducer from './searchTermSlice/searchTermSlice';
import favoritesReducer from './favoritesSlice/favoritesSlice';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('mode');
    if (serializedState === null) {
      return undefined; // Return undefined if no state in localStorage
    }
    return JSON.parse(serializedState); // Parse and return the state
  } catch (err) {
    return undefined; // Return undefined if there's an error
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('mode', serializedState);
  } catch (err) {
    // Handle write errors
    console.error('Could not save state', err);
  }
};

const store = configureStore({
  reducer: {
    mode: modeReducer,
    searchTerm : searchTermReducer,
    favorites : favoritesReducer
  },
  preloadedState: loadState(),
});

// Subscribe to store changes to save to local storage
store.subscribe(() => {
  saveState({
    mode: store.getState().mode,
  });
});

export default store;
