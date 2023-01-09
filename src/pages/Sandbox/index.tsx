import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'src/components/ui';
import { VanillaTilt } from 'src/packages';
import { Icon, KeyIcon } from 'src/assets/icons';
import { keyframes } from '@emotion/react';

type THoverProductCard = {
	className?: string;
};
const HoverProductCard = React.memo(({ className }: THoverProductCard) => {
	return (
		<Main>
			<Layout>
				<SectionStick>
					<div class='stick active'></div>
				</SectionStick>
				<section class='s1'>
					<div class='home'>
						<span>Slider Scroll Example</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							xmlns:xlink='http://www.w3.org/1999/xlink'
							aria-hidden='true'
							focusable='false'
							width='1em'
							height='1em'
							style='-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);'
							preserveAspectRatio='xMidYMid meet'
							viewBox='0 0 20 20'
						>
							<path d='M5 6l5 5l5-5l2 1l-7 7l-7-7z' fill='#fff' />
							<rect
								x='0'
								y='0'
								width='20'
								height='20'
								fill='rgba(0, 0, 0, 0)'
							/>
						</svg>
					</div>
				</section>
				<section class='s2'>Section Two</section>
				<section class='s3'>Section Three</section>
				<section class='s4'>Section Four</section>
			</Layout>
		</Main>
	);
});

export default HoverProductCard;

const Main = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ebf5fc;
	// min-height: 100vh;
	// height: 100%;
	// width: 100%;
`;

const pulse = keyframes`
	0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(25px);
	}
	100% {
		transform: translateY(0px);
	}
`;

const Layout = styled.div`
	width: 100%;
	height: calc(100vh * 3);
	position: relative;
`;

const SectionStick = styled.div`
	margin: auto;
	position: fixed;
	right: 50px;
	bottom: 50px;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
	align-items: center;
	justify-content: flex-start;
	z-index: 1000;
`;
