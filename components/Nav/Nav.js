import { Anchor, Box, Button, Menu, Text, Image } from 'grommet';
import React from 'react';
import { Wrapper } from './styles';

const links = [
	// {
	// 	text: 'Blog',
	// 	location: '#blog'
	// },
	{
		text: 'Features',
		location: '#features'
	}
]

export const Nav = () => {
	return (
		<Box direction={"row"} align={"center"} justify={"between"} margin={"30px 0px"} pad={'small'} background={'light-1'} round>
			<Box height={'70px'} width={'120px'} align={'start'} pad={{ left: "10px", top: "3px" }}>
				<Image
					fit="contain"
					src="/astraios.png"
				/>
			</Box>
			<NavLinks/>
			<Wrapper width={'120px'}>
				<Anchor key={"log-in"} href={"#contact"}>
					<Button primary label={<Text style={{fontWeight: 'bold'}}>Log in</Text>}/>
				</Anchor>
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
					// { label: 'Blog', href: '#blog'},
					{ label: 'Features', href: '#features'},
					{ label: 'Log in', href: '#contact'}
				]} justifyContent={"end"} style={{width: '100px'}}>
			</Menu>
		</Wrapper>
	)
}
