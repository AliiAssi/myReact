import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, options) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data function, now dependent on `url`
    const fetchData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.get(url, options);
            setData(response.data);
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false);
        }
    }, [url]); // Include `url` and `options` in the dependency array

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [fetchData, url]); // Dependencies here ensure `fetchData` is called when `url` changes

    return { data, error, isLoading };
}
