import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'

test('renders project card properly', () => {
    render(<ProjectCard />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
