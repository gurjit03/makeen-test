import { Project } from '../interfaces/Project.interface'
import consultants from './consultant.mock'

const project: Project = {
	id: '234234',
	seq: 1,
	name: 'john doe',
	status: 'running',
	duration: {
		start: 'Sat Sep 11 2021 00:43:58 GMT+0530 (India Standard Time)',
		end: 'Sat Sep 11 2021 1:46:58 GMT+0530 (India Standard Time)',
	},
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	consultants,
}

export default project
