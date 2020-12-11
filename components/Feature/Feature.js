import { Anchor, Box, Heading, Image, Paragraph } from 'grommet';
import React from 'react';
import { Wrapper } from './styles';

export const Feature = ({reverse, title, body}) => {
	return (
		<Box align={'center'} justify={"center"} gap={'large'} direction={reverse ? "row-reverse" : 'row'} margin={{vertical: 'large'}} wrap={true}>
			<Box flex={'grow'} direction={'column'}>
              <Heading level={'2'} margin={'none'}>{title}</Heading>
              <Paragraph size={'small'} responsive>{body}</Paragraph>
              <Anchor label={'Read more'} size={'small'} color={'neutral-3'}/>
            </Box>
			<Image src={'/spaceship.png'} style={{borderRadius: '20px'}}/>
		</Box>
	)
}
