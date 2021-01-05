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
			<Box height={'60px'} width={'60px'} align={'center'}>
				<Image
					fit="contain"
					src="/astraios.png"
					height={'50px'}
				/>
			</Box>
			<NavLinks/>
			<Wrapper>
				<Anchor key={"sign-up"} href={"#contact"}>
					<Button primary label={<Text style={{fontWeight: 'bold'}}>Sign Up</Text>}/>
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
					{ label: 'Blog', href: '#blog'},
					{ label: 'Features', href: '#features'},
					{ label: 'Sign Up', href: '#contact'}
				]} justifyContent={"end"} style={{width: '100px'}}>
			</Menu>
		</Wrapper>
	)
}
