import * as React from 'react';
import styled from '@emotion/styled';

import Hero from '../Hero';

const Landing = React.memo(() => {
	return (
		<Container>
			<Hero />
		</Container>
	);
});

export default Landing;

const Container = styled.div`
	height: 100%;
`;
