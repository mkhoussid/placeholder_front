import * as React from 'react';
import styled from '@emotion/styled';
import { InjectCssVars } from 'src/styles';

type TextFieldProps = {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	gutterBottom?: boolean;
	name: string;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'name'>;
const TextField = React.memo(({ containerProps, name, gutterBottom = false, ...props }: TextFieldProps) => {
	if (!name) {
		throw new Error(`Property \`name\` was not provided`);
	}

	return (
		<Container gutterBottom={gutterBottom} {...props}>
			<InjectCssVarsStyled />
			<Input name={name} {...props} />
		</Container>
	);
});

export default TextField;

const InjectCssVarsStyled = styled(InjectCssVars)`
	--input-color: #99a3ba;
	--input-border: #cdd9ed;
	--input-background: #fff;
	--input-placeholder: #cbd1dc;

	--input-border-focus: #275efe;

	--group-color: var(--input-color);
	--group-border: var(--input-border);
	--group-background: #eef4ff;

	--group-color-focus: #fff;
	--group-border-focus: var(--input-border-focus);
	--group-background-focus: #678efe;
`;

const Container = styled.div<{ gutterBottom: boolean }>`
	${({ gutterBottom }) => `
        margin-bottom: ${gutterBottom ? 1 : 0}rem;
    `}
`;

const Input = styled.input`
	border-color: var(--group-border-focus);
`;
