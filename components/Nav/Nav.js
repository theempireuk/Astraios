import { Anchor, Box, Button, Menu, Text, Image } from 'grommet';
import React from 'react';
import { Wrapper } from './styles';

const links = [
	{
		text: 'Blog',
		location: '#blog'
	},
	{
		text: 'Features',
		location: '#feature'
	},
	{
		text: 'Contact',
		location: '#contact'
	}
]

export const Nav = (props) => {
	return (
		<Box direction={"row"} align={"center"} justify={"between"} margin={"30px 0px"} pad={'small'} background={'light-1'} round>
			<Box pad={'5px'} height="60px" width="60px">
				<Image
					fit="cover"
					src="/astraios.png"
				/>
			</Box>
			<NavLinks/>
			<Wrapper>
				<Button primary label={<Text style={{fontWeight: 'bold'}}>Login</Text>}/>
			</Wrapper>
			<MobileNav/>
		</Box>
		)
}

const NavLinks = () => {
	return(
		<Wrapper>
			<Box direction={"row"} align={"center"} justify={"center"} gap={'medium'}>
				{links.map(({text, location}, key) => 
					<Anchor key={key} label={<Text>{text}</Text>} href={location}></Anchor>
				)}
			</Box>
		</Wrapper>
	)
}

const MobileNav = () => {

	return(
		<Wrapper mobile>
			<Menu items={[
					{ label: 'Home', href: '#home'},
					{ label: 'Blog', href: '#blog'},
					{ label: 'Features', href: '#features'},
					{ label: 'Login'}
				]} justifyContent={"end"} style={{width: '100px'}}>
			</Menu>
		</Wrapper>
	)
}
