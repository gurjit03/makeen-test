import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Drawer from './Drawer'


describe('<Drawer />', () => {
    it('should render properly', () => {
        const { asFragment } = render(<Drawer isOpen>content</Drawer>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display the content properly', () => {
        render(<Drawer isOpen>content</Drawer>)
        expect(screen.getByText('content')).toBeInTheDocument()
    });

    it('should causes body element to have styles [overflow="hidden"] on isOpen="true" and [overflow="auto"] on isOpen="false"', async () => {
        const { rerender } = render(<Drawer isOpen>content</Drawer>)
        expect(document.body).toHaveStyle({
            overflow: 'hidden'
        })

        rerender(<Drawer isOpen={false}>content</Drawer>)
        await waitFor(() => {
            expect(document.body).not.toHaveStyle({
                overflow: 'hidden'
            })
        });
    })

    it('should call onClose handler on backdrop click', () => {
        const onClickHandler = jest.fn();
        render(<Drawer isOpen onClose={onClickHandler}>content</Drawer>)
        const backdropEl = screen.getByRole('button')
        fireEvent.click(backdropEl)
        expect(onClickHandler).toBeCalledTimes(1);
    });
})