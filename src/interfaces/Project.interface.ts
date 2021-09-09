import { Consultant } from './Consultant.interface'

export type Status = 'request' | 'running' | 'done'
export interface Project {
	id: string
	seq: number
	name: string
	status: Status
	duration: {
		start: string
		end: string
	}
	description: string
	consultants?: Consultant[]
}
