import * as React from 'react';
import styled from '@emotion/styled';

import Hero from '../Hero';
import Hero2 from '../Hero2';

const Landing = React.memo(() => {
	return (
		<Container>
			<Hero />
			<Hero2 />
		</Container>
	);
});

export default Landing;

const Container = styled.div`
	height: 100%;
`;
