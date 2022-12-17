import * as React from 'react';
import styled from '@emotion/styled';
import { Button, FlexContainer, TextField, Typography } from 'src/components/ui';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { useStore } from 'effector-react';
import { $dictionary } from 'src/features/core/effector/store';
import { $authValues } from 'src/features/auth/effector/store';
import { EmailIcon, Icon, KeyIcon } from 'src/assets/icons';
import { setAuthValues } from '../../effector/actions';
import { doLogin } from 'src/features/auth/effector/actions';

const Login = React.memo(() => {
	const dictionary = useStore($dictionary);
	const authValues = useStore($authValues);

	const handleAuthInputChange = React.useCallback(
		(field: 'login' | 'password') => (e: React.ChangeEvent<HTMLInputElement>) => {
			setAuthValues({
				payload: {
					authValues: {
						...authValues,
						[field]: e.target.value,
					},
				},
			});
		},
		[authValues],
	);

	const handleLogin = React.useCallback(() => {
		doLogin({ payload: { authValues } });
	}, [authValues]);

	if (!dictionary) return null;

	return (
		<Container placement='center'>
			<FormContainer>
				<Typography variant={ETypographyVariant.WHITE} size={ETypographySize.XXL} gutterBottom>
					{dictionary.AUTH_FORM.LOGIN}
				</Typography>
				<TextField
					name={dictionary.FIELDS.EMAIL.NAME}
					placeholder={dictionary.FIELDS.EMAIL.PLACEHOLDER}
					adornmentContent={<Icon icon={EmailIcon} />}
					value={authValues.login}
					onChange={handleAuthInputChange('login')}
				/>
				<TextField
					name={dictionary.FIELDS.PASSWORD.NAME}
					placeholder={dictionary.FIELDS.PASSWORD.PLACEHOLDER}
					adornmentContent={<Icon icon={KeyIcon} />}
					value={authValues.password}
					onChange={handleAuthInputChange('password')}
					gutterBottom
				/>
				<Button text={dictionary.AUTH_FORM.SUBMIT} onClick={handleLogin} />
			</FormContainer>
		</Container>
	);
});

export default Login;

const Container = styled(FlexContainer)``;

const FormContainer = styled.div`
	${({ theme }) => `
        background-color: ${theme.palette.background.light};
        padding: 2rem;
        border-radius: 0.5rem;
    `}
`;
