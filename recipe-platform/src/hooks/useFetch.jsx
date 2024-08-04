import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function useFetch (url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        () => {
            const fetchData = async () => {
                try{
                    setIsLoading(true);
                    setError(null);
                    const response = await axios.get(url);
                    setData(response.data);
                }catch(e){
                    setError(e.message);
                    setData(null);
                    setIsLoading(false);
                }finally{
                    setIsLoading(false);
                }
            };

            fetchData();
        },[url]
    );

    return { data, error, isLoading };
};