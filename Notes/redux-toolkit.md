
### 1. **Install Redux Toolkit and React-Redux**

You need to install both `@reduxjs/toolkit` and `react-redux`:

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. **Create a Redux Store**

Redux Toolkit provides a `configureStore` function to create the store with best practices built-in. Create a file named `store.js` (or similar) in your `src` directory:

```js
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import yourReducer from './features/yourSlice'; // Import your slice reducer

const store = configureStore({
  reducer: {
    yourFeature: yourReducer, // Add your slice reducer here
  },
});

export default store;
```

### 3. **Create a Slice**

A slice represents a portion of the Redux state and contains the reducers and actions for that state. Create a file named `yourSlice.js` in your `features` directory:

```js
// src/features/yourSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const yourSlice = createSlice({
  name: 'yourFeature',
  initialState,
  reducers: {
    increment: (state) => { // state, action
      state.value += 1; // action.payload.x (x act like an integer)
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Add more reducers if needed
  },
});

export const { increment, decrement } = yourSlice.actions;
export default yourSlice.reducer;
```

### 4. **Provide the Store to Your Application**

Wrap your application with the `Provider` component from `react-redux` to make the Redux store available to your app:

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### 5. **Use Redux State and Actions in Components**

You can use `useSelector` to access the state and `useDispatch` to dispatch actions from your components:

```js
// src/components/YourComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/yourSlice';

function YourComponent() {
  const value = useSelector((state) => state.yourFeature.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default YourComponent;
```

### 6. **Organize Slices and Reducers**

As your app grows, you may have multiple slices. Organize them in separate files and combine them in the `configureStore` function:

```js
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import yourFeatureReducer from './features/yourFeatureSlice';
import anotherFeatureReducer from './features/anotherFeatureSlice';

const store = configureStore({
  reducer: {
    yourFeature: yourFeatureReducer, // it can be the user 
    anotherFeature: anotherFeatureReducer, // it can be the cart
  },
});

export default store;
```

### Summary

1. **Install `@reduxjs/toolkit` and `react-redux`**.
2. **Create a Redux store** with `configureStore`. it will play the role of data container for your project.
3. **Define slices** with `createSlice` . slices are what we have to save example : User, Cart, FilteredItems .
4. **Wrap your app** with `Provider` to pass the store.
5. **Use `useSelector` and `useDispatch`** in your components.
6. **Organize slices** in separate files as needed.
6. **use  Selector** for fetching.
6. **use  Dispatch** for setting.


Redux Toolkit simplifies Redux usage and setup, making it easier to manage and scale your application's state.