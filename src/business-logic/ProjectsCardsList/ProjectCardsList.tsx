import React from 'react';
import ProjectCardsListUI from '../../components/ProjectCardsList/ProjectCardsList'
import { API_URL } from '../../config/app';

import { Project } from '../../interfaces/Project.interface';
import { Drawer } from '../../ui';
import { ProjectCardsWrapper } from './ProjectCardsList.style';

const ProjectCardsList: React.FC = () => {
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
        setShowProjectDrawer(true);
        console.log(projectId, "PROJECT ID..")
    }

    const handleDrawerClose = () => {
        setProjectId('');
        setShowProjectDrawer(false);
    }

    React.useEffect(() => {
        fetchProjects();
    }, [])


    return (
        <>
            <ProjectCardsWrapper>
                {isLoading ?
                    <p>LOADING...</p> :
                    <ProjectCardsListUI projects={projects} onProjectClick={handleProjectClick} />}
            </ProjectCardsWrapper>
            <Drawer isOpen={showProjectDrawer} onClose={handleDrawerClose}>HELP</Drawer>
        </>
    )
}

export default ProjectCardsList