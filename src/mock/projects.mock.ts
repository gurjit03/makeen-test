import { Project } from '../interfaces/Project.interface'
import projectMock from './project.mock'

const projectMock2: Project = {
	...projectMock,
	name: 'john doe2 project',
	duration: projectMock.duration,
	consultants: projectMock.consultants,
}

const projectMock3: Project = {
	...projectMock,
	name: 'john doe3 project',
	duration: projectMock.duration,
	consultants: projectMock.consultants,
}

export default [projectMock, projectMock2, projectMock3]
