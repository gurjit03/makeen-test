import React from 'react';
import ProjectCardsList from '../../components/ProjectCardsList/ProjectCardsList'
import Drawer from '../../components/Drawer/Drawer';
import { API_URL } from '../../config/app';

import { Project } from '../../interfaces/Project.interface';
import { ProjectCardsWrapper } from './ProjectCardsListContainer.style';

const ProjectCardsListContainer: React.FC = () => {
    const [showProjectDrawer, setShowProjectDrawer] = React.useState<boolean>(false);
    const [projectId, setProjectId] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [projects, setProjects] = React.useState<Project[]>([]);

    const fetchProjects = async () => {
        setIsLoading(true);
        const PROJECTS_API_URL = `${API_URL}/projects`
        const response = await fetch(PROJECTS_API_URL)
        const projects: Project[] = await response.json();
        setProjects(projects);
        setIsLoading(false);
    }

    const handleProjectClick = (projectId: string) => () => {
        setProjectId(projectId)
        console.log(projectId, "PROJECT ID..")
    }

    React.useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <>
            <ProjectCardsWrapper>
                {isLoading ?
                    <p>LOADING...</p> :
                    <ProjectCardsList projects={projects} onProjectClick={handleProjectClick} />}
            </ProjectCardsWrapper>
            {showProjectDrawer && <Drawer />}
        </>
    )
}

export default ProjectCardsListContainer