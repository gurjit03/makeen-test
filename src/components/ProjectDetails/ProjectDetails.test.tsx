import React from 'react';
import { render, screen } from '@testing-library/react';
import projectMock from '../../mock/project.mock';
import ProjectDetails from './ProjectDetails'

describe('<ProjectDetails />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<ProjectDetails {...projectMock} />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the consultants properly', () => {
        render(<ProjectDetails {...projectMock} />)
        const consultantName1 = screen.getByText('john doe1');
        expect(consultantName1).toBeInTheDocument()
        const consultantName2 = screen.getByText('john doe2');
        expect(consultantName2).toBeInTheDocument()
    })
})

