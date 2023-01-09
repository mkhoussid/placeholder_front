import * as React from 'react';
import styled from '@emotion/styled';
import { css, keyframes, useTheme } from '@emotion/react';
import { FlexContainer, Typography } from '../ui';
import { ETypographySize, ETypographyVariant } from '../ui/Typography';
import { useStore } from 'effector-react';
import { $dictionary, $landingLogoAnimationCompleted } from 'src/features/core/effector/store';
import { Icon, WorldIcon } from 'src/assets/icons';
import { setLandingLogoAnimationCompleted } from 'src/features/core/effector/actions';

const Hero3 = React.memo(() => {
	const theme = useTheme();
	const dictionary = useStore($dictionary);
	const landingLogoAnimationCompleted = useStore($landingLogoAnimationCompleted);

	const handleFinalAnimationEnd = React.useCallback(() => {
		setLandingLogoAnimationCompleted({ payload: { landingLogoAnimationCompleted: true } });
	}, []);

	if (!dictionary) return null;

	return (
		<Container placement='center'>
			<LayOver id='hero_layover' />
			<Box>
				<Title>
					{/* <SpanBlock /> */}
					<IconStyled
						icon={WorldIcon}
						fillColor={theme.palette.common.white}
						disabledButton
						landingLogoAnimationCompleted={landingLogoAnimationCompleted}
					/>
					<HeaderText
						size={ETypographySize.XXXXL}
						variant={ETypographyVariant.WHITE}
						landingLogoAnimationCompleted={landingLogoAnimationCompleted}
						text={dictionary.LANDING.LOGO_TEXT}
					/>
					{/* <Dot /> */}
				</Title>
				<Role>
					<DivBlock landingLogoAnimationCompleted={landingLogoAnimationCompleted} />
					<SubText
						size={ETypographySize.MD}
						variant={ETypographyVariant.WHITE}
						landingLogoAnimationCompleted={landingLogoAnimationCompleted}
						text={dictionary.LANDING.SUB_TEXT}
						onAnimationEnd={handleFinalAnimationEnd}
					/>
				</Role>
			</Box>
			{/* <WordCarousel>
				<span>{dictionary.LANDING.CAROUSEL.MAIN_TEXT}</span>
				<FlipContainer>
					<Flip className={`flip${dictionary.LANDING.CAROUSEL.OPTIONS.length}`}>
						{dictionary.LANDING.CAROUSEL.OPTIONS.map((option) => (
							<li>{option}</li>
						))}
					</Flip>
				</FlipContainer>
			</WordCarousel> */}
		</Container>
	);
});

export default Hero3;

const WordCarousel = styled.h4`
	font-size: 36px;
	font-weight: 100;
	color: #eee;
	z-index: 5;
`;

const flip2 = keyframes`
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -180px; }
`;

const flip3 = keyframes`
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
`;

const flip4 = keyframes`
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -360px; }
`;

const flip5 = keyframes`
    0% { margin-top: -450px; }
    5% { margin-top: -360px; }
    20% { margin-top: -360px; }
    25% { margin-top: -270px; }
    40% { margin-top: -270px; }
    45% { margin-top: -180px; }
    60% { margin-top: -180px; }
    65% { margin-top: -90px; }
    80% { margin-top: -90px; }
    85% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -450px; }
`;

const mainBlock = keyframes`
    0% {
        width: 0%;
        left: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
`;

const secBlock = keyframes`
    0% {
        width: 0%;
        left: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
    100% {
        width: 0;
        left: 100%;
    }
  `;

const mainFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-60rem);
    }
    100% {
        opacity: 1;
        transform: translateX(-0.5rem);
    }
  `;

const popIn = keyframes`
    0% {
        width: 0px;
        height: 0px;
        background: #e9d856;
        border: 0px solid #ddd;
        opacity: 0;
    }
    50% {
        width: 10px;
        height: 10px;
        background: #e9d856;
        opacity: 1;
        bottom: 45px;
    }
    65% {
        width: 7px;
        height: 7px;
        bottom: 0px;
        width: 25px
    }
    80% {
        width: 10px;
        height: 10px;
        bottom: 35px
    }
    100% {
        width: 7px;
        height: 7px;
        background: #e9d856;
        border: 0px solid #222;
    }
  `;

const secFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
`;

const appearAndSlide = keyframes`
    0% {
        opacity: 0;
        left: calc(50% - 4rem);
    }
    50% {
        opacity: 1;
        left: calc(50% - 4rem);
    }
    100% {
        left: 0;
    }
`;

const Flip = styled.div`
	padding-top: 0.5rem;
`;

const FlipContainer = styled.div`
	.flip2 {
		animation: ${flip2} 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
	}
	.flip3 {
		animation: ${flip3} 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
	}
	.flip4 {
		animation: ${flip4} 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
	}
	.flip5 {
		animation: ${flip5} 12s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
	}

	overflow: hidden;
	position: relative;
	float: right;
	height: 65px;
	padding-top: 10px;
	margin-top: -10px;
	z-index: 5;
	li {
		font-family: Serif;
		color: #eee;
		font-weight: 700;
		padding: 0 10px;
		height: 45px;
		margin-bottom: 45px;
		display: block;
		z-index: 5;
	}
`;

const Box = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	z-index: 10;
`;

const Role = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	height: 30px;
	margin-top: -10px;
	z-index: 10;
`;

const SubText = styled(Typography)<{ landingLogoAnimationCompleted: boolean }>`
	${({ landingLogoAnimationCompleted }) => css`
		animation: ${secFadeIn} ${landingLogoAnimationCompleted ? 0 : 2}s forwards;
		animation-delay: ${landingLogoAnimationCompleted ? 0 : 3.2}s;
		opacity: 0;
		font-weight: 400;
		font-family: 'Lato';
		color: #ffffff;
		text-transform: uppercase;
		letter-spacing: 5px;
		z-index: 10;
	`}
`;

const Title = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	z-index: 10;
`;

const SpanBlock = styled.span`
	width: 0%;
	height: 5rem;
	background: #ffb510;
	position: absolute;
	animation: ${mainBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
	display: flex;
	z-index: 10;
`;

const DivBlock = styled.div<{ landingLogoAnimationCompleted: boolean }>`
	${({ landingLogoAnimationCompleted }) => css`
		width: 0%;
		height: inherit;
		background: #e91e63;
		position: absolute;
		animation: ${secBlock} ${landingLogoAnimationCompleted ? 0 : 2}s cubic-bezier(0.74, 0.06, 0.4, 0.92)
			forwards;
		animation-delay: ${landingLogoAnimationCompleted ? 0 : 2}s;
		display: flex;
		z-index: 10;
	`}
`;

const HeaderText = styled(Typography)<{ landingLogoAnimationCompleted: boolean }>`
	${({ landingLogoAnimationCompleted }) => css`
		justify-content: center;

		p {
			animation: ${mainFadeIn} ${landingLogoAnimationCompleted ? 0 : 1}s forwards;
			animation-delay: ${landingLogoAnimationCompleted ? 0 : 1}s;
			overflow: hidden;
			opacity: 0;
			align-items: baseline;
			position: relative;
			z-index: 10;
		}
	`}
`;

const IconStyled = styled(Icon)<{ landingLogoAnimationCompleted: boolean }>`
	${({ landingLogoAnimationCompleted }) => css`
		width: 8rem;
		height: 8rem;
		animation: ${appearAndSlide} ${landingLogoAnimationCompleted ? 0 : 1}s
			cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
	`}
`;

const Dot = styled.div`
	width: 0px;
	height: 0px;
	border-radius: 50%;

	background: #ffb510;
	animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
	animation-delay: 2s;
	margin-left: 5px;
	margin-top: -10px;
	position: absolute;
	right: 0px;
	z-index: 10;
	bottom: 32px;
`;

const Container = styled(FlexContainer)`
	${({ theme }) => `
        display: flex;
        align-items: center;
        // background: darkorange;
        background: linear-gradient(#f00, #f0f);
        height: 100vh;
        width: 100%;
        position: relative;
        z-index: 2;
        overflow: hidden;
        flex-direction: column;

        &::after {
      
        }
    `}
`;

const LayOver = styled.div`
	display: block;
	width: 120vw;
	overflow: hidden;
	height: 125vh;
	background: radial-gradient(#222, #000);
	// background: linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);
	position: absolute;
	transform: rotate(20deg);
	border-radius: 50%;
	z-index: 2;
`;
