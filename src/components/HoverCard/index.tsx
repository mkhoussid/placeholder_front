import React from 'react';
import styled from '@emotion/styled';
import { Typography } from 'src/components/ui';
import { VanillaTilt } from 'src/packages';
import { Icon, KeyIcon } from 'src/assets/icons';

type THoverProductCard = {
	className?: string;
};
const HoverProductCard = React.memo(({ className }: THoverProductCard) => {
	const handleCardRef = React.useCallback((ref: HTMLDivElement) => {
		if (!ref) return;

		VanillaTilt.init(ref, {
			max: 15,
			speed: 200,
			glare: true,
			'max-glare': 1,
		});
	}, []);

	return (
		<Main className={className}>
			<Container>
				<Card ref={handleCardRef} className='glassmorphic-card'>
					<Background />
					<ImageBox>
						<IconStyled
							icon={KeyIcon}
							fillColor='rgba(255, 255, 255, 0.4)'
							disabledButton
						/>
					</ImageBox>
					<ContentBox>
						<h3>Design</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard ...
						</p>
						<a href='#'>
							<span>Read More</span>
						</a>
					</ContentBox>
				</Card>
			</Container>
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

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 80vw;
	flex-wrap: wrap;
	padding: 40px 0;
`;

const Box = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	right: 20px;
	bottom: 20px;
	background: #ebf5fb;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s;
	z-index: 10;
`;

const Content = styled.div`
	padding: 20px;
	text-align: center;
`;

const Header = styled(Typography)`
	position: absolute !important;
	top: -10px !important;
	right: 30px !important;
	font-size: 8rem !important;
	color: rgba(0, 0, 0, 0.02) !important;
	pointer-events: none;
	transition: 0.5s;
	z-index: 10;
`;

const Title = styled(Typography)`
	position: absolute !important;
	transition: 0.5s !important;
	font-size: 1.8rem !important;
	color: #777 !important;
	top: 30%;
	left: 5%;
	z-index: 10;
`;

const Details = styled(Typography)`
	font-size: 1rem !important;
	font-weight: 300 !important;
	color: #777 !important;
	z-index: 30 !important;
	top: 45%;
	left: 0 !important;
`;

const Button = styled.div`
	position: absolute;
	display: inline-block;
	padding: 8px 20px;
	background: #03a9f4;
	margin-top: 15px;
	border-radius: 20px;
	color: #ffffff;
	font-weight: 500;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	transition: 0.5s;
	cursor: pointer;
	left: 30%;
	bottom: 20%;
`;

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 20px;
	width: 100%;
	height: 100%;
	opacity: 0;
	transition: 0.5s;
	background: linear-gradient(45deg, #b95ce4, #4f29cd);
	z-index: 0;
`;

const Card = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	z-index: 1;
	width: 320px;
	height: 500px;
	padding: 40px 30px;
	margin: 28px;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(5px);
	overflow: hidden;

	&:before {
		content: '';
		position: absolute;
		width: 50%;
		height: 100%;
		top: 0;
		left: 0;
		font-size: 10em;
		background: rgba(255, 255, 255, 0.05);
		pointer-events: none;
	}

	&:hover {
		${Background} {
			opacity: 1;
		}
	}
`;

const ImageBox = styled.div`
	position: relative;
	text-align: center;
`;

const ContentBox = styled.div`
	position: relative;
	margin-top: 20px;
	text-align: center;
	transition: 0.5s;

	&:before {
		content: 'DIGITAL';
		position: absolute;
		top: -50px;
		left: -125px;
		width: 100%;
		font-size: 4em;
		text-transform: uppercase;
		font-weight: 500;
		letter-spacing: 2px;
		transform: rotate(-90deg);
		color: rgba(0, 0, 0, 0.2);
	}

	h3 {
		font-size: 1.8em;
		color: #fff;
		z-index: 1;
	}

	p {
		font-size: 1em;
		color: #fff;
		font-weight: 300;
	}

	a {
		position: relative;
		display: inline-block;
		padding: 8px 20px;
		margin-top: 15px;
		background: #fff;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-left: 1px solid rgba(255, 255, 255, 0.1);
		color: #000;
		border-radius: 20px;
		text-decoration: none;
		font-weight: 500;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	}
`;

const IconStyled = styled(Icon)`
	width: 5rem;
	height: 5rem;
`;
