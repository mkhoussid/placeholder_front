import styled from '@emotion/styled';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FlexContainer, Typography } from 'src/components/ui';
import {
	//setLayoutOptions,
	setPageError,
} from 'src/core/redux/actions';
import { useNavigateParams } from 'src/hooks';
import { IState } from 'src/redux/reducers';
import { uris } from 'src/router';

const Error = React.memo(() => {
	const navigate = useNavigateParams();
	const dispatch = useDispatch();

	const pageError = useSelector((state: IState) => state.app.core.pageError);

	React.useEffect(() => {
		// dispatch(setLayoutOptions({ payload: { layoutOptions: { showHeader: false } } }));
		// return () => {
		// 	dispatch(setLayoutOptions({ payload: { layoutOptions: { showHeader: true } } }));
		// };
	}, []);

	const onClick = React.useCallback(() => {
		dispatch(setPageError({ payload: { content: null } }));
		navigate({ uri: uris.HOME });
	}, []);

	return (
		<Container placement='center'>
			<Typography variant='xxl'>{pageError.title}</Typography>
			<Typography variant='xl' gutterBottom>
				{pageError.details}
			</Typography>
			<Button text='Back to home' onClick={onClick} />
		</Container>
	);
});

export default Error;

const Container = styled(FlexContainer)`
	flex-direction: column;
`;
