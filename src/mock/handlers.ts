import { rest } from 'msw'
import { API_URL } from '../config/app'
import projectsMock from './projects.mock'

const handler1 = rest.get(`${API_URL}/projects`, (req, res, ctx) =>
	res(ctx.json(projectsMock))
)

export default [handler1]
