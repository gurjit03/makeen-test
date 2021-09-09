import React from 'react'
import { Project } from '../../interfaces/Project.interface'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Wrapper } from './ProjectCardsList.style'

interface ProjectCardsListProps {
	projects: Project[] | []
	onProjectClick: (projectId: string) => () => void
}

const ProjectCardsList: React.FC<ProjectCardsListProps> = props => {
	const { projects, onProjectClick } = props

	return (
		<Wrapper>
			{projects.map(projectCard => (
				<ProjectCard
					key={projectCard.id}
					{...projectCard}
					onActionClick={onProjectClick(projectCard.id)}
				/>
			))}
		</Wrapper>
	)
}

export default ProjectCardsList
