import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MyWeatherIcon from './icon-components/MyWeatherIcon';
import IconDictionary from './utils/IconDictionary';
import useFetch from './hooks/useFetch';

function Layout() {
    const apiKey = "46ed9a8c41814306af6f253f36ff5fd9";
    const [city, setCity] = useState("New York");
    const [isInvoked, setIsInvoked] = useState(false);
    const [url, setUrl] = useState(() => `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`);

    useEffect(() => {
        setUrl(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`);
        setCity("");
    }, [isInvoked]);

    const { data, error, isLoading } = useFetch(url, {});

    // Determine the weather icon key based on temperature
    let iconKey = "rainy";
    if (data?.data) {
        const temperature = data.data[0].temp;
        if (temperature < 3) {
            iconKey = "snowy";
        } else if (temperature >= 3 && temperature < 7) {
            iconKey = "rainy";
        } else {
            iconKey = "sunny";
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
                <div className="p-6 flex flex-col items-center">
                    <SearchBar 
                        city={city} 
                        setCity={setCity} 
                        isInvoked={isInvoked} 
                        setIsInvoked={setIsInvoked} 
                    />
                </div>
                <div className="p-6 flex flex-col items-center">
                    <MyWeatherIcon icon={IconDictionary[iconKey]} />
                    <p className='m-5'>{data?.data[0]?.city_name}, {data?.data[0]?.country_code}</p>
                </div>
            </div>
        </div>
    );
}

export default Layout;
