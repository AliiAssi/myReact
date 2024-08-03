To create a custom React hook for handling window resize events, you can set up an event listener for the `resize` event and manage the current window dimensions. This hook will help you respond to changes in the window size and adjust your component’s layout or behavior accordingly.

### Custom Hook: `useWindowResize`

```javascript
import { useState, useEffect } from 'react';

/**
 * useWindowResize - Custom hook to manage window resize events and provide window dimensions
 * 
 * @returns {Object} - An object containing `width` and `height` properties representing the current window dimensions
 */
function useWindowResize() {
    // State to store the current window dimensions
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        /**
         * Function to update the dimensions state with the current window size
         */
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures effect runs only on mount and unmount

    return dimensions;
}

export default useWindowResize;
```

### Explanation

1. **State Management (`useState`):**
   - **`dimensions`**: An object to store the current window width and height. It is initialized with the current dimensions of the window.

2. **Effect Hook (`useEffect`):**
   - Sets up an event listener for the `resize` event on the `window` object.
   - **`handleResize`** function updates the `dimensions` state with the new window width and height whenever a resize event occurs.

3. **Event Listener Management:**
   - Adds the `resize` event listener when the component mounts.
   - Removes the event listener when the component unmounts to prevent memory leaks.

4. **Dependency Array:**
   - The empty dependency array ensures that the effect runs only once, on mount and unmount, avoiding unnecessary re-runs.

### Usage

To use the `useWindowResize` hook in a component:

```javascript
import React from 'react';
import useWindowResize from './useWindowResize'; // Adjust the path as necessary

function ExampleComponent() {
    const { width, height } = useWindowResize();

    return (
        <div>
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    );
}

export default ExampleComponent;
```

### How It Works

1. **Initialize State:**
   - Use state to store the current dimensions of the window.

2. **Apply the Hook:**
   - Call `useWindowResize` to get the current window dimensions and handle window resize events.

3. **Display Dimensions:**
   - Use the dimensions in your component to adjust layouts or display information about the window size.

This custom hook simplifies handling window resize events and provides an easy way to react to changes in window dimensions within your components.