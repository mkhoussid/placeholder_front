import * as React from 'react';
import styled from '@emotion/styled';
import { useInterval } from 'src/hooks';

type TContainerDimensions = {
	width: number;
	height: number;
};
const slides = [
	'https://images.unsplash.com/photo-1670272590027-72888b060829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80',
	'https://images.unsplash.com/photo-1554747706-2e474e1ae0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
	'https://images.unsplash.com/photo-1664737061963-862d6a174a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
];
const Swiper = React.memo(() => {
	const [imageDimensions, setImageDimensions] = React.useState<TContainerDimensions>({
		width: 0,
		height: 0,
	});

	const [currentSlide, setCurrentSlide] = React.useState(0);

	const handleIntervalCallback = React.useCallback(() => {
		setCurrentSlide(slides[currentSlide + 1] ? currentSlide + 1 : 0);
	}, [currentSlide]);

	useInterval({ delay: 1000, ms: 1000, cb: handleIntervalCallback });

	const handleContainerRef = React.useCallback((ref: HTMLDivElement) => {
		if (!ref) return;

		const { width: containerWidth, height: containerHeight } = ref.getBoundingClientRect();

		setImageDimensions({ width: containerWidth, height: containerHeight });
	}, []);

	return (
		<Container ref={handleContainerRef}>
			<Pagination>
				<ControlsContainer>
					{Array.from({ length: 3 }, (_, index) => (
						<Control
							key={`control-${index}`}
							isActive={index === currentSlide}
						></Control>
					))}
				</ControlsContainer>
			</Pagination>
			<InnerContainer
				currentImage={slides[currentSlide]}
				currentSlide={currentSlide}
				containerWidth={imageDimensions.width}
			>
				{slides.map((slide, index) => (
					<Slide key={`slide-${index}`} url={slide} imageDimensions={imageDimensions} />
				))}
			</InnerContainer>
		</Container>
	);
});

export default Swiper;

const Container = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	z-index: 1;
`;

const InnerContainer = styled.div<{ currentImage: string; currentSlide: number; containerWidth: number }>`
	${({ currentImage, currentSlide, containerWidth }) => `
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.25s ease-in-out;
        display: flex;
        transform: translateX(${currentSlide * -containerWidth}px);
        z-index: 2;
    `}
`;
const Slide = styled.div<{ url: string; imageDimensions: TContainerDimensions }>`
	${({ url, imageDimensions: { width, height } }) => `
        background-image: url(${url});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: ${height}px;
        width: ${width}px;
    `}
`;

const Pagination = styled.div`
	position: relative;
	z-index: 5;
	color: white;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
`;

const ControlsContainer = styled.div`
	display: flex;
`;

const Control = styled.div<{ isActive: boolean }>`
	${({ isActive, theme }) => `
        width: 1.5rem;
        height: 1.5rem;
        transition: 0.25s ease-in-out;
        background-color: ${isActive ? theme.palette.common.white : 'rgba(255, 255, 255, 0.5)'};
        border-radius: 50%;
        margin: 1rem;
        border: 1px solid ${theme.palette.common.white};
    `}
`;
