import * as React from 'react';
import styled from '@emotion/styled';
// import Hero from '../Hero';
// import Hero2 from '../Hero2';
import Hero3 from '../Hero3';
import Services from '../Services';
import Compatability from '../Compatability';
import { Portal } from 'src/components';
import Stars from '../Hero3/Stars';

const Landing = React.memo(() => {
	return (
		<Container>
			{/* <Hero />
			<Hero2 /> */}
			<Hero3 />
			<Portal elementId='hero_layover'>
				<Stars />
			</Portal>
			<Services />
			<Compatability />
		</Container>
	);
});

export default Landing;

const Container = styled.div`
	height: 100%;
	width: 100%;
`;
