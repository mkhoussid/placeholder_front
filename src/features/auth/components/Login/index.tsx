import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FlexContainer } from 'src/components/ui';
import { useStore } from 'effector-react';
import { $isLoginSelectionScreen, $user } from 'src/features/auth/effector/store';
import { setLayout } from 'src/features/core/effector/actions';
import LoginScreen from './LoginScreen';
import CodeScreen from './CodeScreen';
import { Redirect, uris } from 'src/router';
import BackgroundBubbles from './BackgroundBubbles';

const Login = React.memo(() => {
	const user = useStore($user);
	const isLoginSelectionScreen = useStore($isLoginSelectionScreen);

	React.useEffect(() => {
		setLayout({ payload: { layout: { visibility: { header: true, footer: false } } } });

		return () => {
			setLayout({ payload: { layout: { visibility: { header: true, footer: true } } } });
		};
	}, []);

	if (user) {
		return <Redirect to={uris.ROOT} />;
	}

	return (
		<Container placement='center'>
			<BackgroundBubbles />
			<FormContainer placement='center' isLoginSelectionScreen={isLoginSelectionScreen}>
				<Front>
					<LoginScreen />
				</Front>
				<Back>
					<CodeScreen isLoginSelectionScreen={isLoginSelectionScreen} />
				</Back>
			</FormContainer>
		</Container>
	);
});

export default Login;

const Container = styled(FlexContainer)`
	height: 100%;
	position: relative;
	overflow: hidden;
	// background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);

	&:before {
		content: '';
		position: absolute;
		bottom: -60%;
		left: 50%;
		width: ${window.innerWidth * 0.65}px;
		height: ${window.innerWidth * 0.65}px;
		background: linear-gradient(#f00, #f0f);
		border-radius: 50%;
	}
`;

const Face = styled.div`
	${({ theme }) => `
        position: absolute;
        width: 100%;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: ${theme.palette.colors.WHITE_3_ALPHA};
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transition: 1s;
        backface-visibility: hidden;
        padding: 2rem;
    `}
`;

const Front = styled(Face)``;

const Back = styled(Face)`
	transform: rotateY(180deg);
`;

const FormContainer = styled(FlexContainer)<{ isLoginSelectionScreen: boolean }>`
	${({ isLoginSelectionScreen }) => `
        position: relative;
        width: 500px;
        transform-style: preserve-3d;
        perspective: 750px;
        height: 100%;
		z-index: 2;

        ${Front} {
            transform: rotateY(${isLoginSelectionScreen ? '0' : '180'}deg);
        }
        ${Back} {
            transform: rotateY(${isLoginSelectionScreen ? '180' : '360'}deg);
        }
    `}
`;
