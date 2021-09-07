import React from "react";
import {Wrapper} from './Button.styled'
import {Button as ButtonProps} from './Button.interface'

export const Button:React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props;
    return (
        <Wrapper {...rest}>
            {children}
        </Wrapper>
    )
}

