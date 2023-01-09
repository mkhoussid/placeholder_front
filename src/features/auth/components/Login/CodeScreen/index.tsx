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
	const innerContent = React.useRef<number[]>([]);
	const [containerHeight, setContainerHeight] = React.useState(0);
	const [innerContentHeight, setInnerContentHeight] = React.useState(0);
	const [successLogin, setSuccessLogin] = React.useState(false);

	const authInputs = React.useRef<HTMLDivElement[]>([]);
	const [showErrorIfEmptyCode, setShowErrorIfEmptyCode] = React.useState(false);

	const authCodeValue = useStore($authCodeValue);
	const dictionary = useStore($dictionary);
	const authEmailValue = useStore($authEmailValue);

	const getIsError = React.useCallback(
		({ value }: { value: string }) => showErrorIfEmptyCode && !value,
		[showErrorIfEmptyCode],
	);

	const handleSuccessLogin = React.useCallback(() => {
		setSuccessLogin(true);
	}, []);

	const handleVerifyCode = React.useCallback(() => {
		if (authCodeValue.length !== 6) {
			setShowErrorIfEmptyCode(true);
		} else {
			doVerifyCode({
				payload: { email: authEmailValue, authCodeValue, onSuccess: handleSuccessLogin },
			});
		}
	}, [authEmailValue, authCodeValue]);

	const handleAuthCodeChange = React.useCallback(
		(index: number) =>
			({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
				let fieldToFocusOn = 0;

				if (index === 0 && value.trim().length === 6) {
					setAuthCodeValue({ payload: { authCodeValue: value.split('') } });

					fieldToFocusOn = 5;
				} else if (value.trim().length <= 1 && (/[0-9]/.test(value) || value === '')) {
					const newAuthCodeValue = [...authCodeValue];
					newAuthCodeValue[index] = value;
					setAuthCodeValue({ payload: { authCodeValue: newAuthCodeValue } });

					fieldToFocusOn = index + 1;
				}

				setTimeout(() => {
					const authCodeInput =
						authInputs.current[fieldToFocusOn]?.querySelector('input');
					authCodeInput?.focus();
				}, 0);
			},
		[authCodeValue],
	);

	const handleSplitCodeRef = React.useCallback((ref: HTMLDivElement) => {
		if (!ref) return;

		authInputs.current.push(ref);
	}, []);

	const handleContainerRef = React.useCallback((ref: HTMLDivElement) => {
		if (!ref) return;

		const containerHeight = ref.getBoundingClientRect().height;

		setContainerHeight(containerHeight);
	}, []);

	const handleRef = React.useCallback(
		(isContainerRef: boolean) => (ref: HTMLDivElement) => {
			if (!ref) return;

			const { height } = ref.getBoundingClientRect();

			if (isContainerRef) {
				setContainerHeight(height);
			} else if (innerContent.current.length !== 2) {
				innerContent.current.push(height);

				if (innerContent.current.length === 2) {
					setInnerContentHeight(innerContent.current.reduce((sum, el) => sum + el, 0));
				}
			}
		},
		[],
	);

	if (isLoginSelectionScreen || !dictionary) return null;

	return (
		<Container
			ref={handleRef(true)}
			containerHeight={containerHeight}
			innerContentHeight={innerContentHeight}
			successLogin={successLogin}
		>
			<TypographyStyled
				successLogin={successLogin}
				containerHeight={containerHeight}
				variant={ETypographyVariant.WHITE}
				size={ETypographySize.XXL}
				gutterBottom
				text={successLogin ? dictionary.AUTH_FORM.WELCOME : dictionary.AUTH_FORM.ENTER_CODE}
			/>
			{!successLogin && (
				<>
					<SplitCodeContainer ref={handleRef(false)}>
						{Array.from({ length: 6 }, (_, index) => {
							return (
								<SplitCode
									key={`code-${index}`}
									ref={handleSplitCodeRef}
								>
									<TextFieldStyled
										name={dictionary.FIELDS.AUTH_CODE.NAME}
										value={authCodeValue[index] || ''}
										disabled={
											index !== 0 &&
											!authCodeValue[index - 1]
										}
										onChange={handleAuthCodeChange(index)}
										getIsError={getIsError}
									/>
								</SplitCode>
							);
						})}
					</SplitCodeContainer>
					<Button
						text={dictionary.AUTH_FORM.SUBMIT}
						onClick={handleVerifyCode}
						disableOnRequestLoading
						ref={handleRef(false)}
					/>
				</>
			)}
		</Container>
	);
});

export default CodeScreen;

const Container = styled.div<{ containerHeight: number; innerContentHeight: number; successLogin: boolean }>`
	${({ containerHeight, innerContentHeight, successLogin }) => `
		height: ${containerHeight ? `${successLogin ? containerHeight - innerContentHeight : containerHeight}px` : 'auto'};
		transition: 0.3s ease-in-out;
	`}
`;

const SplitCodeContainer = styled(FlexContainer)`
	height: auto;
`;

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

const TypographyStyled = styled(Typography)<{ containerHeight: number; successLogin: boolean }>`
	${({ successLogin }) => `
		&& {
			transform: translateY(${successLogin ? 8 : 0}px);
			transition: 0.3s ease-in-out;
			height: auto;
		}
	`}
`;
