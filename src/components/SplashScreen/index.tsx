import * as React from 'react';
import styled from '@emotion/styled';
import { Spinner } from 'src/components/ui';

const SplashScreen = React.memo(() => {
	return (
		<Container>
			<Spinner />
		</Container>
	);
});

export default SplashScreen;

const Container = styled.div`
	height: 100%;
	width: 100%;
`;
