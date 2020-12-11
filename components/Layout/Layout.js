import React from 'react';
import { Wrapper } from './styles';
import Nav from '../Nav';
import Footer from '../Footer';
import Announcement from '../Announcement'
import { Grommet, grommet } from 'grommet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0px;
	}
`

export const Layout = ({ children, ...props }) => {
	return (
		<Grommet theme={grommet}>
			<GlobalStyles/>
			<Announcement>Announcement</Announcement>
			<Wrapper {...props}>
				<Nav/>
				{children}
				<Footer/>
			</Wrapper>
		</Grommet>
		)
}
