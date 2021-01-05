import { Anchor, Box, Heading, Image, Paragraph } from 'grommet';
import React from 'react';
import { Wrapper } from './styles';

export const Feature = ({image, reverse, title, body, readMore}) => {
	return (
		<Box align={'center'} justify={"center"} gap={'large'} direction={reverse ? "row-reverse" : 'row'} margin={{vertical: 'large'}} wrap={true}>
			<Box flex={'grow'} direction={'column'}>
              <Heading level={'2'} margin={'none'}>{title}</Heading>
              <Paragraph size={'small'} responsive>{body}</Paragraph>
              {readMore && <Anchor href={readMore} label={'Read more'} size={'small'} color={'neutral-3'}/>}
            </Box>
			<Box width={'small'} height={'small'} style={{borderRadius: '20px'}}>
				<Image src={image} fit={'contain'}/>
			</Box>
		</Box>
	)
}
