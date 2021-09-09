import React from 'react'
import Consultant from '../Consultant/Consultant'
import { Project as ProjectDetailsProps } from '../../interfaces/Project.interface'
import { getColorsForStatus, getProperDate } from '../../utils'

import {
	ProjectDuration,
	ProjectEndDuration,
	ProjectStatus,
} from '../ProjectCard/ProjectCard.style'
import {
	ProjectDescription,
	ProjectDetailGroup,
	ProjectDetailLabel,
	ProjectName,
	ProjectConsultants,
	Wrapper,
} from '../ProjectDetails/ProjectDetails.style'

const ProjectDetails: React.FC<ProjectDetailsProps> = props => {
	const { name, status, duration, description, consultants = [] } = props
	const projectStatusColor = React.useMemo(
		() => getColorsForStatus(status),
		[status]
	)
	const projectStartDate = React.useMemo(
		() => getProperDate(duration.start),
		[duration, duration.start]
	)
	const projectEndDate = React.useMemo(
		() => getProperDate(duration.end),
		[duration, duration.end]
	)
	const allConsultants = React.useMemo(
		() =>
			consultants.map(consultant => (
				<Consultant key={consultant.id} {...consultant} />
			)),
		[consultants]
	)
	return (
		<Wrapper>
			<ProjectStatus color={projectStatusColor}>{status}</ProjectStatus>
			<ProjectName>{name}</ProjectName>
			<ProjectDetailGroup>
				<ProjectDetailLabel>Duration</ProjectDetailLabel>
				<ProjectDuration>
					<p>{projectStartDate}</p> to{' '}
					<ProjectEndDuration>{projectEndDate}</ProjectEndDuration>
				</ProjectDuration>
			</ProjectDetailGroup>
			<ProjectDetailGroup>
				<ProjectDetailLabel>Description</ProjectDetailLabel>
				<ProjectDescription>{description}</ProjectDescription>
			</ProjectDetailGroup>
			<ProjectDetailGroup>
				<ProjectDetailLabel>Consultants</ProjectDetailLabel>
				<ProjectConsultants>{allConsultants}</ProjectConsultants>
			</ProjectDetailGroup>
		</Wrapper>
	)
}

export default ProjectDetails
