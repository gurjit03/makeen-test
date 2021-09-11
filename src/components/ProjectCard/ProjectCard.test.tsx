import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import projectMock from '../../mock/project.mock';
import ProjectCard from './ProjectCard'

describe('<ProjectCard />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<ProjectCard {...projectMock} onActionClick={() => { }} />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call the onActionClick properly', () => {
        const onActionClick = jest.fn()
        render(<ProjectCard {...projectMock} onActionClick={onActionClick} />)
        const viewButton = screen.getByText('view');
        fireEvent.click(viewButton)
        expect(onActionClick).toBeCalledTimes(1);
    })
})

