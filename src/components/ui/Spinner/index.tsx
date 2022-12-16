import React from 'react';
import styled from '@emotion/styled';
import { keyframes, useTheme } from '@emotion/react';

const dash = keyframes`
 to {
    stroke-dashoffset: 136;
  }
`;
const Polygon = styled.polygon`
	stroke-dasharray: 17;
	animation: ${dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
const SVG = styled.svg`
	transform-origin: 50% 65%;
`;

const Spinner = React.memo(({ height = 80, width = 80, color: _color }: any): React.ReactElement => {
	const theme = useTheme();

	const color = _color || theme.palette.primary.main;
	return (
		<Container aria-label={'triangle-loading'} aria-busy='true' role='status'>
			<SVG
				id='triangle'
				width={width}
				height={height}
				viewBox='-3 -4 39 39'
				data-testid='triangle-svg'
			>
				<Polygon fill='transparent' stroke={color} strokeWidth='1' points='16,0 32,32 0,32' />
			</SVG>
		</Container>
	);
});

export default Spinner;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
