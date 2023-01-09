import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

const multipleBoxShadow = (numberOfStars: number) => {
	let base = `${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`;

	for (let i = 0; i < numberOfStars; i++) {
		base += `, ${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF`;
	}

	return base;
};

const Stars = React.memo(() => {
	const star1Ref = React.useRef<HTMLDivElement>(null);
	const star2Ref = React.useRef<HTMLDivElement>(null);
	const star3Ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (!star1Ref.current || !star2Ref.current || !star3Ref.current) return;
		star1Ref.current.style.boxShadow = multipleBoxShadow(700);
		star2Ref.current.style.boxShadow = multipleBoxShadow(200);
		star3Ref.current.style.boxShadow = multipleBoxShadow(100);
	}, [star1Ref.current, star2Ref.current, star3Ref.current]);

	return (
		<>
			<Stars1 ref={star1Ref} />
			<Stars2 ref={star2Ref} />
			<Stars3 ref={star3Ref} />
		</>
	);
});

export default Stars;

const animStar = keyframes`
  from {
      transform: translateY(0px)
  }
  to {
      transform: translateY(-2000px)
  }
`;

const StarsBase = styled.div``;

const Stars1 = styled(StarsBase)`
	width: 1px;
	height: 1px;
	background: transparent;
	animation: ${animStar} 50s linear infinite;

	&:after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 1px;
		height: 1px;
		background: transparent;
		box-shadow: 700px #ffffff;
	}
`;

const Stars2 = styled(StarsBase)`
	width: 2px;
	height: 2px;
	background: transparent;
	box-shadow: 200px #ffffff;
	animation: ${animStar} 100s linear infinite;

	&:after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 2px;
		height: 2px;
		background: transparent;
		box-shadow: 200px #ffffff;
	}
`;

const Stars3 = styled(StarsBase)`
	width: 3px;
	height: 3px;
	background: transparent;
	box-shadow: 100px #ffffff;
	animation: ${animStar} 150s linear infinite;

	&:after {
		content: ' ';
		position: absolute;
		top: 2000px;
		width: 3px;
		height: 3px;
		background: transparent;
		box-shadow: 100px #ffffff;
	}
`;
