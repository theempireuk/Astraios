import { Box, Text } from 'grommet';
import React from 'react';

export const Announcement = ({ children }) => {
	return (
		<Box background={'#7D4CDB'} justify={"center"} align={"center"} pad={'xsmall'}>
			<Text>
				{children}
			</Text>
		</Box>
	)
}
