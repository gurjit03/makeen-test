// eslint-disable-next-line import/no-extraneous-dependencies
import { renderHook } from '@testing-library/react-hooks'
import { API_URL } from '../config/app'
import projectsMock from '../mock/projects.mock'
import useFetch from './useFetch'

describe('useFetch', () => {
	it('should return data (or projects) after fetch', async () => {
		const stubbedFetchUrl = `${API_URL}/projects`
		// Execute
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch(stubbedFetchUrl)
		)
		await waitForNextUpdate()

		// Assert
		expect(result.current).toStrictEqual({
			data: projectsMock,
			status: 'fetched',
		})
	})
})
