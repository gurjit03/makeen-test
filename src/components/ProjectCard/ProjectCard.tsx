
import React from 'react';
import { Wrapper, ProjectName, ProjectStatus, ProjectEndDuration } from './ProjectCard.styled';
import { Project as ProjectProps } from '../../interfaces/Project.interface';
import { Button } from '../../ui';
import { getProperDate } from '../../utils';

interface ProjectCardProps extends ProjectProps {
    onActionClick: () => {}
}

const ProjectCard:React.FC<ProjectCardProps> = (props) => {
    const { 
        id,
        name,
        status,
        duration,
        description,
        onActionClick
    } = props;    
    return (
        <Wrapper>
            <ProjectName>{name}</ProjectName>
            <ProjectStatus>{status}</ProjectStatus>
            <p>{getProperDate(duration.start)}</p> to <ProjectEndDuration>{getProperDate(duration.end)}</ProjectEndDuration>
            <p>{description}</p>
            <Button variant="outlined" color="primary" onClick={onActionClick}>
                view
            </Button>
        </Wrapper>
    )
}

export default ProjectCard