import { useEffect, useState, useRef } from 'react'

interface Cache<T> {
	[url: string]: T
}

const useFetch = <T = unknown>(url?: string, options?: any) => {
	const [status, setStatus] = useState<string>('')
	const [data, setData] = useState<T | null>(null)
	const cache = useRef<Cache<T>>({})

	useEffect(() => {
		// Do nothing if the url is not given
		if (!url) return

		const fetchData = async () => {
			setStatus('fetching')

			// If a cache exists for this url, return it
			if (cache.current[url]) {
				const res = cache.current[url]
				setData(res)
				setStatus('fetched')
			}

			try {
				const response = await fetch(url, options)
				if (!response.ok) {
					throw new Error(response.statusText)
				}

				const res = (await response.json()) as T
				cache.current[url] = res
				setData(res)
				setStatus('fetched')
			} catch (error) {
				setStatus('error')
			}
		}

		fetchData()
	}, [url])

	return { data, status }
}

export default useFetch
