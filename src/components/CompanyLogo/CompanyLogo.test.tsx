import React from 'react';
import { render } from '@testing-library/react'
import CompanyLogo from './CompanyLogo';

describe('<CompanyLogo />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<CompanyLogo />)
        expect(asFragment()).toMatchSnapshot();
    });
})