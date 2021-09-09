import { useEffect, useState, useRef } from 'react'

interface Cache<T> { 
    [url: string]: T 
}

const useFetch = <T = unknown>(url?: string, options?: RequestInit) => {
  const [status, setStatus] = useState<string>('');
  const [data, setData] = useState<T | null>(null);
  const cache = useRef<Cache<T>>({})

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return

    const fetchData = async () => {
      setStatus("fetching");
      
      // If a cache exists for this url, return it
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      }

      try {
        const response = await fetch(url, options)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T
        cache.current[url] = data
        setData(data);
        setStatus('fetched');
      } catch (error) {
        setStatus('error')
        setStatus('fetched')
      }
    }

    fetchData()
  }, [url])

  console.log(cache, url,"CACHE, URL")

  return {data, status}
}

export default useFetch