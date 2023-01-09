import React from 'react';
import styled from '@emotion/styled';
import media from 'src/assets/media/cdn';
import { generateMediaQueryCss } from 'src/utils';
import { css, keyframes } from '@emotion/react';
import { FlexContainer, Typography } from '../ui';
import { ETypographySize, ETypographyVariant } from '../ui/Typography';

const Hero = React.memo(() => {
	return (
		<Container>
			<BackdropFilter />
			<HeroImage>
				<Shadow />
				<Wrapper>
					<Content>
						<Brand>
							<LogoContainer placement='center'>
								<LogoImage
									alt='Website Logo'
									src={media['logo.webp']}
								/>
								<TextAnimationContainer>
									<Typography
										variant={ETypographyVariant.WHITE}
										size={ETypographySize.XXXL}
										text={'Именно для'}
									/>
								</TextAnimationContainer>
							</LogoContainer>
							<FogLow>
								<img alt='fog-low' src={media['fog-low.webp']} />
							</FogLow>
							<FogLowRight>
								<img alt='fog-low-right' src={media['fog-low.webp']} />
							</FogLowRight>
						</Brand>
					</Content>
				</Wrapper>
				<Clouds />
			</HeroImage>
		</Container>
	);
});

const Container = styled.div`
	height: 100vh;
`;

export default Hero;

const BackdropFilter = styled.div`
	${({ theme }) => `
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${theme.palette.common.black};
        opacity: 0.3;
        z-index: 1;
    `}
`;

const HeroImage = styled.div`
	${({ theme }) => `
        background-image: url(${media['heroImage8_compressed.webp']});
        background-repeat: no-repeat;
        background-color: ${theme.palette.common.gray};
        background-size: cover;
        background-position: center;
        max-width: 100%;
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
        
        ${generateMediaQueryCss({
		css: `
                background-size: auto 120%;
                background-position: 25% 100%;
            `,
	})}
    `}
`;

const Shadow = styled.div`
	boxshadow: '0 25px 31px 55px rgba(0, 0, 0, 0.6)';
	${generateMediaQueryCss({
		css: `
            display: none;
        `,
	})};
`;

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 2;
	transform: translate(-50%, -50%);
	text-align: center;
	color: #ffffff;
	width: 100%;
`;

const Content = styled.div``;

const Brand = styled.div`
	margin: 0 auto;
	position: relative;
	text-align: center;
	color: #ffffff;
	display: block;
	width: 40rem;
`;

const LogoContainer = styled(FlexContainer)`
	position: relative;
	flex-direction: column;
	width: 100%;
`;

const LogoImage = styled.img`
	width: 100%;
`;

const cloudLoop = keyframes`
    0% {
        transform: translate3d(40%, 0, 0);
    }
    100% {
        transform: translate3d(-50%, 0, 0);
    }
`;

const fogBase = css`
	position: absolute;
	left: 0;
	bottom: 0;
	margin-left: -65%;
	margin-bottom: -50px;
	width: 100%;
	opacity: 0.85;
	img & {
		width: 100%;
	}
	animation: ${cloudLoop} 40s linear infinite;
`;

const FogLow = styled.div`
	${fogBase}
`;

const FogLowRight = styled.div`
	${fogBase}
	margin-left: 10%;
	opacity: 1;
`;

const cloudLoopClouds = keyframes`
    0% {
        transform: translate3d(20%, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
`;

const Clouds = styled.div`
	background-image: url(${media['clouds.webp']});
	position: absolute;
	z-index: 1;
	bottom: 0;
	left: 0;
	width: 250.625rem;
	height: 43.75em;
	animation: ${cloudLoopClouds} 10s linear infinite;

	${generateMediaQueryCss({
		css: `
            animation: ${cloudLoopClouds} 80s linear infinite;
            filter: blur(10px);
        `,
		isMaxWidth: false,
	})}
`;

const TextAnimationContainer = styled(FlexContainer)``;
