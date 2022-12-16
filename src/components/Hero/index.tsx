import React from 'react';
import styled from '@emotion/styled';
import Exhibition from './Exhibition';
import { generateMediaQueryCss } from 'src/utils';

const Hero = React.memo(() => {
	return (
		<Parent>
			<Box>
				<Exhibition />
			</Box>
			<Box>I am Box 2</Box>
		</Parent>
	);
});

export default Hero;

const Parent = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); // auto-fill doesn't stretch, auto-fit does
	${generateMediaQueryCss({
		css: `
            grid-template-rows: 1fr 1fr;
        `,
	})}
`;

const Box = styled.div`
	background-color: beige;

	&:nth-of-type(2) {
		background-color: lightblue;
	}
`;
