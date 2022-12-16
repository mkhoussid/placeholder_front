import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer, TextField, Typography } from 'src/components/ui';
import { ETypographyVariant } from 'src/components/ui/Typography';
import { useStore } from 'effector-react';
import { $dictionary } from 'src/features/core/effector/store';

const Login = React.memo(() => {
	const dictionary = useStore($dictionary);

	if (!dictionary) return null;

	return (
		<Container placement='center'>
			<FormContainer>
				<Typography variant={ETypographyVariant.BLACK}>{'Вход'}</Typography>
				<TextField
					name={dictionary.textfieldNames.EMAIL_FIELD.NAME}
					placeholder={dictionary.textfieldNames.EMAIL_FIELD.PLACEHOLDER}
				/>
			</FormContainer>
		</Container>
	);
});

export default Login;

const Container = styled(FlexContainer)``;

const FormContainer = styled.div`
	${({ theme }) => `
        background-color: ${theme.palette.common.steel};
        padding: 1rem;
        border-radius: 0.25rem;
    `}
`;
