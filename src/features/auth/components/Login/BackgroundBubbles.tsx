import * as React from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { hexToRgba } from 'src/utils';

const BackgroundBubbles = React.memo(() => {
	return (
		<Container id='asdasdad'>
			{Array.from({ length: 10 }, (_, index) => (
				<Bubble key={`bubble-${index}`} />
			))}
		</Container>
	);
});

export default BackgroundBubbles;

const Container = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Square = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-700px) rotate(600deg);
    }
`;

const Bubble = styled.li`
	${({ theme }) => css`
		position: absolute;
		z-index: 1;
		list-style: none;
		display: block;
		width: 40px;
		height: 40px;
		background-color: ${hexToRgba(theme.palette.common.white, 0.15)};
		bottom: -160px;
		animation: ${Square} 25s infinite;
		transition-timing-function: linear;

		&:nth-of-type(1) {
			left: 10%;
		}

		&:nth-of-type(2) {
			left: 20%;
			width: 80px;
			height: 80px;
			animation-delay: 0s;
			animation-duration: 17s;
		}

		&:nth-of-type(3) {
			left: 25%;
			animation-delay: 2s;
		}

		&:nth-of-type(4) {
			left: 40%;
			width: 60px;
			height: 60px;
			animation-duration: 22s;
			background-color: ${hexToRgba(theme.palette.common.white, 0.25)};
		}

		&:nth-of-type(5) {
			left: 70%;
		}

		&:nth-of-type(6) {
			left: 80%;
			width: 120px;
			height: 120px;
			animation-delay: 1s;
			background-color: ${hexToRgba(theme.palette.common.white, 0.2)};
		}

		&:nth-of-type(7) {
			left: 32%;
			width: 160px;
			height: 160px;

			animation-delay: 5s;
		}

		&:nth-of-type(8) {
			left: 55%;
			width: 20px;
			height: 20px;

			animation-delay: 13s;
			animation-duration: 40s;
		}

		&:nth-of-type(9) {
			left: 25%;
			width: 10px;
			height: 10px;

			animation-delay: 0s;
			animation-duration: 40s;
			background-color: ${hexToRgba(theme.palette.common.white, 0.3)};
		}

		&:nth-of-type(10) {
			left: 90%;
			width: 160px;
			height: 160px;

			animation-delay: 9s;
		}
	`}
`;
