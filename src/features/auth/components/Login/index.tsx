import * as React from 'react';
import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';
import { Button, FlexContainer, TextField, Typography } from 'src/components/ui';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { useStore } from 'effector-react';
import { $dictionary } from 'src/features/core/effector/store';
import { $authEmailValue } from 'src/features/auth/effector/store';
import { EmailIcon, Icon, KeyIcon } from 'src/assets/icons';
import { setAuthEmailValue } from '../../effector/actions';
import { doLogin } from 'src/features/auth/effector/actions';
import { setLayout } from 'src/features/core/effector/actions';

const Login = React.memo(() => {
	const [isLoginMode, setIsLoginMode] = React.useState(true);

	const dictionary = useStore($dictionary);
	const authEmailValue = useStore($authEmailValue);

	React.useEffect(() => {
		setLayout({ payload: { layout: { visibility: { header: true, footer: false } } } });

		return () => {
			setLayout({ payload: { layout: { visibility: { header: true, footer: true } } } });
		};
	}, []);

	const handleAuthInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setAuthEmailValue({
			payload: {
				authEmailValue: e.target.value,
			},
		});
	}, []);

	const handleLogin = React.useCallback(() => {
		doLogin({ payload: { email: authEmailValue } });
	}, [authEmailValue]);

	if (!dictionary) return null;

	return (
		<Container placement='center'>
			<FormContainer placement='center' isLoginMode={isLoginMode}>
				<Front>
					<Typography
						variant={ETypographyVariant.WHITE}
						size={ETypographySize.XXL}
						gutterBottom
					>
						{dictionary.AUTH_FORM.LOGIN}
					</Typography>
					<TextField
						name={dictionary.FIELDS.EMAIL.NAME}
						placeholder={dictionary.FIELDS.EMAIL.PLACEHOLDER}
						adornmentContent={<Icon icon={EmailIcon} disabledButton />}
						value={authEmailValue}
						onChange={handleAuthInputChange}
						gutterBottom
					/>
					<Button
						text={dictionary.AUTH_FORM.SUBMIT}
						onClick={handleLogin}
						disableOnRequestLoading
					/>
				</Front>
				<Back>I'm the back!</Back>
			</FormContainer>
		</Container>
	);
});

export default Login;

const Container = styled(FlexContainer)`
	height: 100%;
	position: relative;
	overflow: hidden;

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
	${({ theme }) => css`
		transform: rotateY(180deg);
	`}
`;

const FormContainer = styled(FlexContainer)<{ isLoginMode: boolean }>`
	${({ isLoginMode }) => `
        position: relative;
        width: 500px;
        transform-style: preserve-3d;
        perspective: 750px;
        height: 100%;

        ${Front} {
            transform: rotateY(${isLoginMode ? '0' : '180'}deg);
        }
        ${Back} {
            transform: rotateY(${isLoginMode ? '180' : '360'}deg);
        }
    `}
`;
