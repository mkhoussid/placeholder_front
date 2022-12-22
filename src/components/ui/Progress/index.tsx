import * as React from 'react';
import styled from '@emotion/styled';
import { HEADER_HEIGHT_IN_REM } from 'src/constants';
import { useStore } from 'effector-react';
import { $requestLoading } from 'src/features/core/effector/store';
import { css, keyframes } from '@emotion/react';

const Progress = React.memo(() => {
	const [loaded, setLoaded] = React.useState(false);

	const requestLoading = useStore($requestLoading);

	React.useEffect(() => {
		setLoaded(!requestLoading);
		if (!requestLoading) {
			setTimeout(() => {
				setLoaded(false);
			}, 500);
		}
	}, [requestLoading]);

	return <Container requestLoading={requestLoading} loaded={loaded} />;
});

export default Progress;

const loadingAnimation = keyframes`
    0%, 10% {
        width: 10%;
    }
    20% {
        width: 20%;
    }
    25% {
        width: 25%;
    }
    26%, 35% {
        width: 35%;
    }
    40% {
        width: 40%
    }
    60% {
        width: 60%
    }
    61%, 75% {
        width: 75%
    }
`;

const Container = styled.div<{ requestLoading: boolean; loaded: boolean }>`
	${({ theme, requestLoading, loaded }) => css`
		width: ${loaded ? 100 : 0}%;
		height: 0.25rem;
		background: ${theme.palette.primary.light};
		position: fixed;
		left: 0;
		top: ${HEADER_HEIGHT_IN_REM}rem;
		z-index: 10;
		animation: ${requestLoading && !loaded
			? css`
					${loadingAnimation} 10s ease-in-out
			  `
			: 'none'};
	`}
`;
