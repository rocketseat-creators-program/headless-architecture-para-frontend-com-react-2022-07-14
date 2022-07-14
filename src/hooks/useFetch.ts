import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResponse(data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { response, error };
};
