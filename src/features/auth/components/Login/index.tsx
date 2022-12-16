import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer, TextField, Typography } from 'src/components/ui';
import { ETypographyVariant } from 'src/components/ui/Typography';
import { useStore } from 'effector-react';
import { $dictionary } from 'src/features/core/effector/store';
import { EmailIcon, Icon } from 'src/assets/icons';

const Login = React.memo(() => {
	const dictionary = useStore($dictionary);

	if (!dictionary) return null;

	return (
		<Container placement='center'>
			<FormContainer>
				<Typography variant={ETypographyVariant.BLACK}>{dictionary.AUTH.LOGIN}</Typography>
				<TextField
					name={dictionary.FIELDS.EMAIL_FIELD.NAME}
					placeholder={dictionary.FIELDS.EMAIL_FIELD.PLACEHOLDER}
					adornmentContent={<Icon icon={EmailIcon} />}
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
