import React, { useCallback, useState, useEffect } from 'react';
import axios from 'axios';

function useFetchHook(url, options = {}) {
    /**
     * Manage three different states: data, error, and loading
     */
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // This function will fetch data from the API
    const fetchData = useCallback(
        async () => {
            try {
                const response = await axios.get(url, options);
                return response.data; // Return only the data
            } catch (error) {
                throw error;
            }
        },
        [] 
    );

    // useEffect to handle the fetch request
    useEffect(() => {
        const invokeFetchingApi = async () => {
            setLoading(true);
            try {
                const result = await fetchData();
                setData(result);
                setError(null); // Clear any previous error
            } catch (error) {
                setData(null); // Clear any previous data
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (url) { // Check if url is provided
            invokeFetchingApi();
        }
    }, [fetchData, url]); // Include options in dependency array

    return { data, error, loading };
}

export default useFetchHook;
