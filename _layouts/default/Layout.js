import React from 'react'
import { Wrapper } from './styles'
import Nav from '@components/Nav'
import Announcement from '@components/Announcement'
import { Grommet, grommet, Footer, Text, Box, Image, Anchor, Paragraph } from 'grommet'
import Head from 'next/head'

export const Layout = ({ children, ...props }) => {
	return (
		<Grommet theme={grommet}>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.description}/>
			</Head>
			<Announcement>Public Beta launching 2021!</Announcement>
			<Wrapper {...props}>
				<Nav/>
				{children}
				<Footer/>
			</Wrapper>
			<Footer background="light-1" justify="center" pad="small">
				<Box align="center">
					<Anchor href="https://discord.gg/PTKf7D28YU">
						<Box margin="auto" width="50px" height="50px">
							<Image src="/Discord-Logo.png" alt="discord" fit="contain"/>
						</Box>
						<Paragraph margin={{ top: "none" }}>Join our Discord community</Paragraph>
					</Anchor>
					<Text textAlign="center" size="small">
						© 2021 Copyright Astraios
					</Text>
				</Box>
			</Footer>
		</Grommet>
	)
}
