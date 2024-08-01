import React, { useEffect, useState } from 'react';

function Page() {
    const [ms, setMs] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setMs(prevMs => {
                    if (prevMs >= 990) {
                        setSeconds(prevSeconds => {
                            if (prevSeconds >= 59) {
                                setMinutes(prevMinutes => prevMinutes + 1);
                                return 0;
                            }
                            return prevSeconds + 1;
                        });
                        return 0;
                    }
                    return prevMs + 10;
                });
            }, 10);
        } else if (!isRunning && (ms !== 0 || seconds !== 0 || minutes !== 0)) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, ms, seconds]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const handleReset = () => {
        setIsRunning(false);
        setMs(0);
        setSeconds(0);
        setMinutes(0);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-4">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}:{String(ms / 10).padStart(2, '0')}
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleStart}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Start
                    </button>
                    <button
                        onClick={handleStop}
                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Stop
                    </button>
                    <button
                        onClick={handleReset}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Page;
