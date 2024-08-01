import React, { useEffect, useState } from "react";

function Page() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNow(new Date());
        }, 1000); // Update every second

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="mt-16 px-6">
            <div className="container mx-auto">
                <h1 className="text-xl font-bold">Current Time</h1>
                <p className="text-lg">{now.toLocaleTimeString()}</p>
            </div>
        </div>
    );
}

export default Page;
