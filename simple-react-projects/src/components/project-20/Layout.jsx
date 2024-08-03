import React, { useRef } from 'react';

/**
 * Layout - A component with buttons to scroll to different sections using a single ref
 */
function Layout() {
    // Create a single ref for the section you want to scroll to
    const ref = useRef(null);

    /**
     * Scrolls to the section associated with the ref
     */
    const scrollToSection = () => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
                <div className="p-6 flex flex-col items-center">
                    <div style={{ height: '900px' }} ref={ref}>
                        div 1
                    </div>
                    <div style={{ height: '900px' }}>
                        div 2
                    </div>
                    <div style={{ height: '900px' }}>
                        div 3
                        <button onClick={scrollToSection}>
                            Scroll to div 1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
