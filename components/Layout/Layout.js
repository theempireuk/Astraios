import React from 'react'
import { Wrapper } from './styles'
import Nav from '../Nav'
import Announcement from '../Announcement'
import { Grommet, grommet, Footer, Text } from 'grommet'
import Head from 'next/head'
import Style from "styled-jsx/style"

export const Layout = ({ children, ...props }) => {
	return (
		<Grommet theme={grommet}>
			<Head>
				<title>Astraios</title>
			</Head>
			<Announcement>Public Beta launching 2021!</Announcement>
			<Wrapper {...props}>
				<Nav/>
				{children}
				<Footer/>
			</Wrapper>
			<Footer background="light-1" justify="center" pad="small">
				<Text textAlign="center" size="small">
					© 2021 Copyright Astraios
				</Text>
			</Footer>
		</Grommet>
	)
}
