import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

    it('should call onClick handler properly', () => {
        const onClickHandler = jest.fn();
        render(<Button variant="contained" color="primary" onClick={onClickHandler}>button</Button>)
        const buttonEl = screen.getByTestId('button');
        fireEvent.click(buttonEl)
        expect(onClickHandler).toBeCalledTimes(1);
    })
})

