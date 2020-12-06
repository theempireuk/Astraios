import React from 'react';
import { Wrapper } from './styles';

export const Footer = ({ children, ...props }) => {
	return <Wrapper {...props}>{children}</Wrapper>
}
