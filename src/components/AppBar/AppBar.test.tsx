import React from 'react';
import { render } from '@testing-library/react'
import AppBar from './AppBar';

describe('<AppBar />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<AppBar />)
        expect(asFragment()).toMatchSnapshot();
    });
})