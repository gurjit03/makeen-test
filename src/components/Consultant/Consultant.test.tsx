import React from 'react';
import { render, screen } from '@testing-library/react'
import consultantsMock from '../../mock/consultant.mock';
import Consultant from './Consultant';

describe('<Consultant />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<Consultant {...consultantsMock[1]} />)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should have consultant data', () => {
        render(<Consultant {...consultantsMock[1]} />)
        const avatarName = `${consultantsMock[1].firstName} ${consultantsMock[1].lastName}`;
        const avatarNameEl = screen.getByText(avatarName)
        const avatarImgEl = screen.getByAltText('avatar');
        expect(avatarNameEl).toBeInTheDocument()
        expect(avatarImgEl).toBeInTheDocument();
        expect(avatarImgEl.src).toContain("https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark")
    })
})