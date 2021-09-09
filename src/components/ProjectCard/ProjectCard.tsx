
import React from 'react';
import { Wrapper, ProjectName, ProjectStatus, ProjectEndDuration, ProjectDuration, ProjectAction } from './ProjectCard.style';
import { Project as ProjectProps } from '../../interfaces/Project.interface';
import { Button } from '../../ui';
import { getColorsForStatus, getProperDate } from '../../utils';

interface ProjectCardProps extends ProjectProps {
    onActionClick: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
    const {
        id,
        name,
        status,
        duration,
        description,
        onActionClick
    } = props;
    const projectStatusColor = getColorsForStatus(status);

    return (
        <Wrapper>
            <ProjectName>{name}</ProjectName>
            <ProjectStatus color={projectStatusColor}>{status}</ProjectStatus>
            <ProjectDuration>
                <p>{getProperDate(duration.start)}</p> to <ProjectEndDuration>{getProperDate(duration.end)}</ProjectEndDuration>
            </ProjectDuration>
            <p>{description.substr(0, 120)}</p>
            <ProjectAction>
                <Button variant="outlined" color="primary" onClick={onActionClick}>
                    view
                </Button>
            </ProjectAction>
        </Wrapper>
    )
}

export default ProjectCard