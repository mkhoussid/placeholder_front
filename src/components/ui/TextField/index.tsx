import * as React from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import { $requestLoading } from 'src/features/core/effector/store';

type TextFieldProps = {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	gutterBottom?: boolean;
	name: string;
	adornmentContent?: React.ReactNode;
	adornmentPlacement?: 'left' | 'right';
	value: string;
	disabled?: boolean;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'name'>;
const TextField = React.memo(
	({
		containerProps,
		className,
		name,
		gutterBottom = false,
		adornmentContent = null,
		adornmentPlacement = 'left',
		disabled,
		...props
	}: TextFieldProps) => {
		const requestLoading = useStore($requestLoading);

		if (!name) {
			throw new Error(`Property \`name\` was not provided`);
		}

		const adornment = adornmentContent ? <span>{adornmentContent}</span> : null;

		return (
			<Container gutterBottom={gutterBottom} {...props}>
				{adornmentPlacement === 'left' && adornment}
				<Input
					name={name}
					className={clsx('form-field', className)}
					disabled={requestLoading || disabled}
					{...props}
				/>
				{adornmentPlacement === 'right' && adornment}
			</Container>
		);
	},
);

export default TextField;

const Container = styled.div<{ gutterBottom: boolean }>`
	${({ gutterBottom, theme }) => `
        margin-bottom: ${gutterBottom ? 1 : 0}rem;

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

        position: relative;
        display: flex;
        width: 100%;
        & > span,
        .form-field {
            white-space: nowrap;
            display: block;
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
            }
            &:first-child {
                border-radius: 6px 0 0 6px;
            }
            &:last-child {
                border-radius: 0 6px 6px 0;
            }
            &:not(:first-child) {
                margin-left: -1px;
            }
        }
        .form-field {
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            width: 1%;
            margin-top: 0;
            margin-bottom: 0;
        }
        & > span {
            text-align: center;
            padding: 8px 12px;
            font-size: 14px;
            line-height: 25px;
            color: var(--group-color);
            background: var(--group-background);
            border: 1px solid var(--group-border);
            transition: background .3s ease, border .3s ease, color .3s ease;
        }
        &:focus-within {
            & > span {
                color: var(--group-color-focus);
                background: var(--group-background-focus);
                border-color: var(--group-border-focus);

                path {
                    fill: ${theme.palette.common.white};
                }
            }
        }
    `}
`;

const Input = styled.input`
	display: block;
	width: 100%;
	padding: 8px 16px;
	line-height: 25px;
	font-size: 14px;
	font-weight: 500;
	font-family: inherit;
	border-radius: 6px;
	-webkit-appearance: none;
	color: var(--input-color);
	border: 1px solid var(--input-border);
	background: var(--input-background);
	transition: border 0.3s ease;
	&::placeholder {
		color: var(--input-placeholder);
	}
	&:focus {
		outline: none;
		border-color: var(--input-border-focus);
	}
`;
