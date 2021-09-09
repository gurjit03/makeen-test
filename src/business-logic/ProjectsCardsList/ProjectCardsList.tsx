import React from 'react'
import ProjectCardsListUI from '../../components/ProjectCardsList/ProjectCardsList'
import { API_URL } from '../../config/app'
import useFetch from '../../hooks/useFetch'

import { Project } from '../../interfaces/Project.interface'
import { Drawer } from '../../ui'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import { ProjectCardsWrapper } from './ProjectCardsList.style'

const ProjectCardsList: React.FC = () => {
	const [showProjectDrawer, setShowProjectDrawer] =
		React.useState<boolean>(false)
	const [projectId, setProjectId] = React.useState<string>('')
	const PROJECTS_API_URL = `${API_URL}/projects`
	const { data: projects, status } = useFetch<Project[]>(PROJECTS_API_URL)

	const handleProjectClick = (projectId: string) => () => {
		setProjectId(projectId)
		setShowProjectDrawer(true)
	}

	const handleDrawerClose = () => {
		setProjectId('')
		setShowProjectDrawer(false)
	}

	const isFetchingData = status === 'fetching'

	return (
		<>
			<ProjectCardsWrapper>
				{isFetchingData ? (
					<p>LOADING...</p>
				) : (
					<ProjectCardsListUI
						projects={projects || []}
						onProjectClick={handleProjectClick}
					/>
				)}
			</ProjectCardsWrapper>
			<Drawer isOpen={showProjectDrawer} onClose={handleDrawerClose}>
				{projectId && <ProjectDetails projectId={projectId} />}
			</Drawer>
		</>
	)
}

export default ProjectCardsList
