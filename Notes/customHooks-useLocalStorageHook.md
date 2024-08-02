
---

# `useLocalStorage` Custom Hook

The `useLocalStorage` custom hook provides an easy way to access and manage values in the browser's local storage. It simplifies the process of initializing and updating values stored in local storage, while also keeping the React state in sync.

## Code

```jsx
import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue === null) {
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
      return JSON.parse(storedValue);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  return [value, setStoredValue];
}
```

## Description

This custom hook, `useLocalStorage`, is designed to manage local storage values in a React application. Here's how it works:

1. **Initialization:**
   - You provide a `key` and a `defaultValue` when creating the hook.
   - The hook initializes the state with the value from local storage if it exists; otherwise, it uses the `defaultValue`.
   - If the value is not present in local storage, it is set with the `defaultValue`.

2. **State Management:**
   - The hook manages the local storage value as a state variable.
   - The `value` state represents the current value of the local storage key.
   - The `setStoredValue` function updates both the state and the local storage value.

3. **Error Handling:**
   - The hook includes error handling for both reading from and writing to local storage.

## Usage

To use this hook in your component:

```jsx
import useLocalStorage from './useLocalStorage'; // Adjust the path as necessary

function MyComponent() {
  const [mode, setMode] = useLocalStorage('mode', 'dark');

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <p>Current mode: {mode}</p>
      <button onClick={toggleMode}>
        {mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}
```

In this example, `useLocalStorage` is used to manage a `mode` value, with a default value of `'dark'`. The `setMode` function allows you to toggle between `'dark'` and `'light'` modes, and the current value is saved and retrieved from local storage.

---
