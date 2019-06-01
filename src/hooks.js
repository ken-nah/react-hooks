import { useEffect, useState } from 'react'

export const useFetch = (url, initialState) => {
    const [result, setResult] = useState(initialState);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setResult(data))
    }, []);

    return result;
};