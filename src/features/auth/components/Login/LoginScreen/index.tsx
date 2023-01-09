import * as React from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Typography } from 'src/components/ui';
import { doLogin, setAuthEmailValue } from 'src/features/auth/effector/actions';
import { useStore } from 'effector-react';
import { $authEmailValue } from 'src/features/auth/effector/store';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { $dictionary } from 'src/features/core/effector/store';
import { EmailIcon, Icon } from 'src/assets/icons';

const LoginScreen = React.memo(() => {
	const dictionary = useStore($dictionary);
	const authEmailValue = useStore($authEmailValue);

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
		<Container>
			<Typography
				variant={ETypographyVariant.WHITE}
				size={ETypographySize.XXL}
				gutterBottom
				text={dictionary.AUTH_FORM.LOGIN}
			/>
			<TextField
				name={dictionary.FIELDS.EMAIL.NAME}
				placeholder={dictionary.FIELDS.EMAIL.PLACEHOLDER}
				adornmentContent={<Icon icon={EmailIcon} disabledButton />}
				value={authEmailValue}
				onChange={handleAuthInputChange}
				gutterBottom
			/>
			<Button text={dictionary.AUTH_FORM.SUBMIT} onClick={handleLogin} disableOnRequestLoading />
		</Container>
	);
});

export default LoginScreen;

const Container = styled.div``;
