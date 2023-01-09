import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const HelixSpinner = React.memo(() => {
	return (
		<Main>
			<Wrapper>
				<DotContainer>
					{Array.from({ length: 25 }, (_, index) => (
						<Dot key={`dot-${index}`} />
					))}
				</DotContainer>
			</Wrapper>
		</Main>
	);
});

export default HelixSpinner;

const Main = styled.div`
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	height: 100%;
	width: 100%;
`;

const Wrapper = styled.div`
	background: linear-gradient(45deg, #d65b9e 1%, #f699cb 22%, #ffacd9 51%, #f699cb 83%, #d65b9e 100%);
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	height: 100%;
	width: 100%;
`;

const DotContainer = styled.div`
	position: relative;
`;

const movement = keyframes`
	0% {
		transform: translate3d(0, -25px, 0);
		z-index: 0;
	}
	50% {
		transform: translate3d(0, 25px, 0);
		z-index: 10;
	}
	100% {
		transform: translate3d(0, -25px, 0);
		z-index: -5;
	}
`;

const sizeOpacity = keyframes`
	0% {
		opacity: 1;
		transform: scale(1);
	}
	25% {
		transform: scale(1.5);
	}
	50% {
		opacity: 1;
	}
	75% {
		opacity: 0.35;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
`;

const Dot = styled.div`
	animation-name: ${movement};
	animation-duration: 2s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	height: 10px;
	position: absolute;
	top: -10px;
	transform: translate3d(0, -25px, 0) scale(1);
	width: 10px;

	&:before {
		animation-name: ${sizeOpacity};
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: ease;
		background: white;
		border-radius: 50%;
		content: '';
		display: block;
		height: 100%;
		width: 100%;
	}

	&:nth-of-type(even)::before {
		background-color: #ff47aa;
		box-shadow: inset 0 0 4px #ff1492;
	}

	&:nth-of-type(1) {
		animation-delay: -0.1s;
		left: 150px;

		&:before {
			animation-delay: -0.1s;
		}
	}

	&:nth-of-type(2) {
		animation-delay: -1.2s;
		left: 150px;

		&:before {
			animation-delay: -1.2s;
		}
	}

	&:nth-of-type(3) {
		animation-delay: -0.3s;
		left: 125px;

		&:before {
			animation-delay: -0.3s;
		}
	}

	&:nth-of-type(4) {
		animation-delay: -1.4s;
		left: 125px;

		&:before {
			animation-delay: -1.4s;
		}
	}

	&:nth-of-type(5) {
		animation-delay: -0.5s;
		left: 100px;

		&:before {
			animation-delay: -0.5s;
		}
	}

	&:nth-of-type(6) {
		animation-delay: -1.6s;
		left: 100px;

		&:before {
			animation-delay: -1.6s;
		}
	}

	&:nth-of-type(7) {
		animation-delay: -0.7s;
		left: 75px;

		&:before {
			animation-delay: -0.7s;
		}
	}

	&:nth-of-type(8) {
		animation-delay: -1.8s;
		left: 75px;

		&:before {
			animation-delay: -1.8s;
		}
	}

	&:nth-of-type(9) {
		animation-delay: -0.9s;
		left: 50px;

		&:before {
			animation-delay: -0.9s;
		}
	}

	&:nth-of-type(10) {
		animation-delay: -2s;
		left: 50px;

		&:before {
			animation-delay: -2s;
		}
	}

	&:nth-of-type(11) {
		animation-delay: -1.1s;
		left: 25px;

		&:before {
			animation-delay: -1.1s;
		}
	}

	&:nth-of-type(12) {
		animation-delay: -2.2s;
		left: 25px;

		&:before {
			animation-delay: -2.2s;
		}
	}

	&:nth-of-type(13) {
		animation-delay: -1.3s;
		left: 0px;

		&:before {
			animation-delay: -1.3s;
		}
	}

	&:nth-of-type(14) {
		animation-delay: -2.4s;
		left: 0px;

		&:before {
			animation-delay: -2.4s;
		}
	}

	&:nth-of-type(15) {
		animation-delay: -1.5s;
		left: -25px;

		&:before {
			animation-delay: -1.5s;
		}
	}

	&:nth-of-type(16) {
		animation-delay: -2.6s;
		left: -25px;

		&:before {
			animation-delay: -2.6s;
		}
	}

	&:nth-of-type(17) {
		animation-delay: -1.7s;
		left: -50px;

		&:before {
			animation-delay: -1.7s;
		}
	}

	&:nth-of-type(18) {
		animation-delay: -2.8s;
		left: -50px;

		&:before {
			animation-delay: -2.8s;
		}
	}

	&:nth-of-type(19) {
		animation-delay: -1.9s;
		left: -75px;

		&:before {
			animation-delay: -1.9s;
		}
	}

	&:nth-of-type(20) {
		animation-delay: -3s;
		left: -75px;

		&:before {
			animation-delay: -3s;
		}
	}

	&:nth-of-type(21) {
		animation-delay: -2.1s;
		left: -100px;

		&:before {
			animation-delay: -2.1s;
		}
	}

	&:nth-of-type(22) {
		animation-delay: -3.2s;
		left: -100px;

		&:before {
			animation-delay: -3.2s;
		}
	}

	&:nth-of-type(23) {
		animation-delay: -2.3s;
		left: -125px;

		&:before {
			animation-delay: -2.3s;
		}
	}

	&:nth-of-type(24) {
		animation-delay: -3.4s;
		left: -125px;

		&:before {
			animation-delay: -3.4s;
		}
	}

	&:nth-of-type(25) {
		animation-delay: -2.5s;
		left: -150px;

		&:before {
			animation-delay: -2.5s;
		}
	}

	&:nth-of-type(26) {
		animation-delay: -3.6s;
		left: -150px;

		&:before {
			animation-delay: -3.6s;
		}
	}
`;
