import React from 'react';
import { Project as ProjectDetailsProps } from '../../interfaces/Project.interface';
import { getColorsForStatus } from '../../utils';
import { ProjectStatus } from '../ProjectCard/ProjectCard.style';
import { ProjectName, Wrapper } from '../ProjectDetails/ProjectDetails.style';

const ProjectDetails: React.FC<ProjectDetailsProps> = (props) => {
    const {
        id,
        name,
        status,
        duration,
        description,
        consultants
    } = props;
    const projectStatusColor = getColorsForStatus(status);
    console.log(projectStatusColor, "PROJECT STATUS COLOR")
    return (
        <Wrapper>
            <ProjectStatus color={projectStatusColor}>{status}</ProjectStatus>
            <ProjectName>{name}</ProjectName>
        </Wrapper>
    )
}

export default ProjectDetails;