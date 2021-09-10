import { Status } from '../interfaces/Project.interface'
import { colors } from '../config/jss'

const getColorsForStatus = (status: Status): string => {
	switch (status) {
		case 'running':
			return colors.primary
		case 'done':
			return colors.secondary
		case 'request':
			return colors.tertiary
		default:
			return ''
	}
}

export default getColorsForStatus
