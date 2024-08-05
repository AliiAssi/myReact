import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchData(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTheData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(url, options);
      setData(response.data);
    } catch (e) {
      setError(e.message || 'An error occurred');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTheData();
  }, [url]); // Include options in dependency array to refetch when options change

  return { data, error, isLoading };
}
