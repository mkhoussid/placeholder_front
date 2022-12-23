import * as React from 'react';
import styled from '@emotion/styled';
import { $dictionary } from 'src/features/core/effector/store';
import { useStore } from 'effector-react';
import { Button, FlexContainer, TextField, Typography } from 'src/components/ui';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { $authCodeValue, $authEmailValue } from 'src/features/auth/effector/store';
import { doVerifyCode, setAuthCodeValue } from 'src/features/auth/effector/actions';

interface CodeScreenProps {
	isLoginSelectionScreen: boolean;
}
const CodeScreen: React.FC<CodeScreenProps> = React.memo(({ isLoginSelectionScreen }) => {
	const authInputs = React.useRef<HTMLDivElement[]>([]);
	const [showErrorIfEmptyCode, setShowErrorIfEmptyCode] = React.useState(false);

	const authCodeValue = useStore($authCodeValue);
	const dictionary = useStore($dictionary);
	const authEmailValue = useStore($authEmailValue);

	const getIsError = React.useCallback(
		({ value }: { value: string }) => showErrorIfEmptyCode && !value,
		[showErrorIfEmptyCode],
	);

	const handleVerifyCode = React.useCallback(() => {
		if (authCodeValue.length !== 6) {
			setShowErrorIfEmptyCode(true);
		} else {
			doVerifyCode({ payload: { email: authEmailValue, authCodeValue } });
		}
	}, [authEmailValue, authCodeValue]);

	const handleAuthCodeChange = React.useCallback(
		(index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
			if (/[0-9]/.test(e.target.value) || e.target.value === '') {
				const newAuthCodeValue = [...authCodeValue];
				newAuthCodeValue[index] = e.target.value;
				setAuthCodeValue({ payload: { authCodeValue: newAuthCodeValue } });

				setTimeout(() => {
					const authCodeInput = authInputs.current[index + 1]?.querySelector('input');
					authCodeInput?.focus();
				}, 0);
			}
		},
		[authCodeValue],
	);

	const handleSplitCodeRef = React.useCallback((ref: HTMLDivElement) => {
		authInputs.current.push(ref);
	}, []);

	if (isLoginSelectionScreen || !dictionary) return null;

	return (
		<Container>
			<Typography variant={ETypographyVariant.WHITE} size={ETypographySize.XXL} gutterBottom>
				{dictionary.AUTH_FORM.ENTER_CODE}
			</Typography>
			<SplitCodeContainer>
				{Array.from({ length: 6 }, (_, index) => {
					return (
						<SplitCode key={`code-${index}`} ref={handleSplitCodeRef}>
							<TextFieldStyled
								name={dictionary.FIELDS.AUTH_CODE.NAME}
								value={authCodeValue[index] || ''}
								disabled={index !== 0 && !authCodeValue[index - 1]}
								onChange={handleAuthCodeChange(index)}
								getIsError={getIsError}
							/>
						</SplitCode>
					);
				})}
			</SplitCodeContainer>
			<Button text={dictionary.AUTH_FORM.SUBMIT} onClick={handleVerifyCode} disableOnRequestLoading />
		</Container>
	);
});

export default CodeScreen;

const Container = styled.div``;

const SplitCodeContainer = styled(FlexContainer)``;

const SplitCode = styled.div`
	margin: 1rem;
	&:nth-of-type(1) {
		margin-left: 0;
	}
	&:nth-of-type(6) {
		margin-right: 0;
	}
`;

const TextFieldStyled = styled(TextField)`
	&& {
		border-radius: unset;
	}
`;
