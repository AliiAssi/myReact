import React, { useState, useEffect } from 'react';

/**
 * ScrollButton - A component with a button to scroll up or down based on the current scroll position
 */
function ScrollButton() {
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        /**
         * Function to update the scroll direction based on the current scroll position
         */
        const updateScrollDirection = () => {
            const scrollPosition = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Update scroll direction based on the scroll position
            if (scrollPosition + clientHeight >= scrollHeight - 10) { // Tolerance of 10px to detect bottom
                setScrollDirection('up');
            } else if (scrollPosition <= 10) { // Tolerance of 10px to detect top
                setScrollDirection('down');
            } else {
                // Default to scrolling down if neither top nor bottom
                setScrollDirection('down');
            }
        };

        // Initial check
        updateScrollDirection();

        // Update scroll direction on scroll event
        window.addEventListener('scroll', updateScrollDirection);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, []);

    /**
     * Function to handle button click
     * Scrolls up or down based on the current scroll direction
     */
    const handleButtonClick = () => {
        if (scrollDirection === 'down') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <button onClick={handleButtonClick} style={styles.button}>
            Scroll {scrollDirection === 'down' ? 'Down' : 'Up'}
        </button>
    );
}

// Inline styles for the button
const styles = {
    button: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
    }
};

export default ScrollButton;
