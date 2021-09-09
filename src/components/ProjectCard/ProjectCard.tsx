
import React from 'react';
import { Wrapper, ProjectName, ProjectStatus, ProjectEndDuration, ProjectDuration, ProjectAction, ProjectDescription } from './ProjectCard.style';
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
    const projectStatusColor = React.useMemo(() => getColorsForStatus(status), [status]);
    const projectStartDate = React.useMemo(() => getProperDate(duration.start), [duration.start]);
    const projectEndDate = React.useMemo(() => getProperDate(duration.end), [duration.end]);
    return (
        <Wrapper>
            <ProjectName>{name}</ProjectName>
            <ProjectStatus color={projectStatusColor}>{status}</ProjectStatus>
            <ProjectDuration>
                <p>{projectStartDate}</p> to <ProjectEndDuration>{projectEndDate}</ProjectEndDuration>
            </ProjectDuration>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectAction>
                <Button variant="outlined" color="primary" onClick={onActionClick}>
                    view
                </Button>
            </ProjectAction>
        </Wrapper>
    )
}

export default ProjectCard