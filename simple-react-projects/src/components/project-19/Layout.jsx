import React from 'react';
import ScrollButton from './ScrollButton'; // Adjust the path as necessary

function Layout() {  
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6 flex flex-col items-center">
            <h1>Scroll to see the button in action</h1>
            <div style={{ height: '2000px' }}>
                <p>Scroll down to see the button...</p>
            </div>
            <ScrollButton />
        </div>
      </div>
    </div>
  );
}

export default Layout;
