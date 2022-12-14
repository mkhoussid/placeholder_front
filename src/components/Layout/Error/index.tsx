import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'src/components/ui';
// import {
// 	//setLayoutOptions,
// 	setPageError,
// } from 'src/core/effector/actions';

const Error = React.memo(() => {
	return (
		<Container placement='center'>
			{/* <Typography variant='xxl'>{pageError.title}</Typography>
			<Typography variant='xl' gutterBottom>
				{pageError.details}
			</Typography>
			<Button text='Back to home' onClick={onClick} /> */}
		</Container>
	);
});

export default Error;

const Container = styled(FlexContainer)`
	flex-direction: column;
`;
