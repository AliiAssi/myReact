import React, { useEffect, useRef } from 'react';

function Page() {
    const c = useRef(null);

    const handleFocusAndStyle = () => {
        if (c.current) {
            c.current.focus();
            c.current.style.backgroundColor = '#f0f0f0'; // Example color change
        }
    };

    useEffect(() => {
        console.log('Component rendered');
    }, []); // Run only once on mount

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
                <div className="flex space-x-4">
                    <input
                        type="text"
                        ref={c}
                        className="border p-2 rounded" // Added some basic styling
                    />
                    <button
                        onClick={handleFocusAndStyle}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;
