import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button'


describe('<Button />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<Button variant="contained" color="primary" >button</Button>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the content properly', () => {
        render(<Button variant="contained" color="primary" >button</Button>)
        expect(screen.getByText('button')).toBeInTheDocument()
    })
})

