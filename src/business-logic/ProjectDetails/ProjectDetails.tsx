import React from 'react';
import ProjectDetailsUI from '../../components/ProjectDetails/ProjectDetails';
import { API_URL } from '../../config/app';
import useFetch from '../../hooks/useFetch';
import { Project } from '../../interfaces/Project.interface';

interface ProjectDetailsProps {
    projectId: string
}

const ProjectDetails: React.FC<ProjectDetailsProps> = (props) => {
    const { projectId } = props;
    const PROJECT_API_URL = `${API_URL}/projects/${projectId}`
    const { data: project, status } = useFetch<Project>(PROJECT_API_URL);

    if (status === 'fetching') return <span>LOADING...</span>
    return project ? <ProjectDetailsUI {...project} /> : null
}

export default ProjectDetails;