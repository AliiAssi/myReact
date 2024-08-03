import { useEffect, useRef } from 'react';

/**
 * useOutsideClick - Custom hook to detect clicks outside of the specified element
 * 
 * @param {Function} handler - Function to be called when an outside click is detected
 * @returns {Object} - An object with a `ref` property to attach to the target element
 */
function useOutsideClick(handler) {
    // Ref to store the target element
    const ref = useRef(null);

    useEffect(() => {
        /**
         * Function to handle click events
         * Calls the handler if the click is outside the referenced element
         * if (ref.current) as we know means if the reference is not null 
         */
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                handler(event);
            }
        };

        // Add event listener for clicks outside the element
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handler]); // Re-run effect if the handler changes

    return { ref };
}

export default useOutsideClick;
