import * as React from 'react';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import { $inputErrors, $requestLoading } from 'src/features/core/effector/store';
import FlexContainer from '../FlexContainer';

type TextFieldProps = {
	containerProps?: React.HTMLAttributes<HTMLDivElement>;
	gutterBottom?: boolean;
	name: string;
	adornmentContent?: React.ReactNode;
	adornmentPlacement?: 'left' | 'right';
	value: string;
	disabled?: boolean;
	disableOnRequestLoading?: boolean;
	getIsError?: ({ inputErrors, name, value }: { inputErrors: string[]; name: string; value: string }) => boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

const TextField = React.memo(
	({
		className,
		name,
		gutterBottom = false,
		adornmentContent = null,
		adornmentPlacement = 'left',
		disabled,
		containerProps = {},
		disableOnRequestLoading,
		value,
		getIsError,
		...props
	}: TextFieldProps) => {
		const inputRef = React.useRef<HTMLInputElement>(null);
		const inputErrors = useStore($inputErrors);
		const requestLoading = useStore($requestLoading);

		if (!name) {
			throw new Error(`Property \`name\` was not provided`);
		}

		const handleAdornmentClick = React.useCallback(() => {
			inputRef.current?.focus();
		}, []);

		const handleIsError = React.useCallback(() => {
			if (getIsError) {
				return getIsError({ inputErrors, name, value });
			} else {
				return inputErrors.includes(name.split('_')[0]);
			}
		}, [getIsError, inputErrors, value]);

		const adornment = adornmentContent ? (
			<AdornmentContent
				className='adornment_container'
				placement='center'
				onClick={handleAdornmentClick}
			>
				{adornmentContent}
			</AdornmentContent>
		) : null;

		return (
			<Container gutterBottom={gutterBottom} {...containerProps}>
				{adornmentPlacement === 'left' && adornment}
				<Input
					ref={inputRef}
					name={name}
					className={className}
					disabled={(disableOnRequestLoading && requestLoading) || disabled}
					error={handleIsError()}
					value={value}
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
        height: 3rem;
        --input-color: #99a3ba;
        --input-border: #cdd9ed;
        --input-border-error: #A30000;
        --input-background: rgba(255, 255, 255, 0.2);
        --input-background-hover: rgba(255, 255, 255, 0.3);
        --input-background-focus: rgba(255, 255, 255, 0.4);
        --input-placeholder: #cbd1dc;
    
        --input-border-focus: ${theme.palette.primary.main};
    
        --group-color: var(--input-color);
        --group-border: var(--input-border);
        --group-background: #eef4ff;
    
        --group-color-focus: #fff;
        --group-border-focus: var(--input-border-focus);
        --group-background-focus: ${theme.palette.primary.light};

        position: relative;
        display: flex;
        width: 100%;
        &:focus-within {
            & > .adornment_container {
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

const Input = styled.input<{ error: boolean }>`
	${({ error }) => `
            display: block;
            width: 100%;
            height: 100%;
            padding: 0.5rem 1rem;
            font-weight: 500;
            font-family: inherit;
            border-radius: 6px;
            -webkit-appearance: none;
            color: var(--input-color);
            border: 1px solid ${error ? 'var(--input-border-error)' : 'var(--input-border)'};
            background-color: var(--input-background);
            transition: border 0.3s ease, background 0.3s ease-in-out;
            white-space: nowrap;
            display: block;
            position: relative;
            z-index: 1;
            flex: 1 1 auto;
            width: 1%;
            margin-top: 0;
            margin-bottom: 0;
            font-size: 1.25rem;
            &:not(:first-of-type):not(:last-child) {
                border-radius: 0;
            }
            &:first-of-type {
                border-radius: 0.5rem 0 0 0.5rem;
            }
            &:last-child {
                border-radius: 0 0.5rem 0.5rem 0;
            }
            &:not(:first-of-type) {
                margin-left: 1px;
            }
            &::placeholder {
                color: var(--input-placeholder);
            }
            &:focus {
                outline: none;
                border-color: var(--input-border-focus);
                background-color: var(--input-background-focus);
            }
            &:hover {
                background-color: var(--input-background-hover);
            }
        `}
`;

const AdornmentContent = styled(FlexContainer)`
	width: 5rem;
	height: 100%;
	text-align: center;
	color: var(--group-color);
	background: var(--group-background);
	border: 1px solid var(--group-border);
	transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
	white-space: nowrap;
	&:not(:first-of-type):not(:last-child) {
		border-radius: 0;
	}
	&:first-of-type {
		border-radius: 0.5rem 0 0 0.5rem;
	}
	&:last-child {
		border-radius: 0 0.5rem 0.5rem 0;
	}
	&:not(:first-of-type) {
		margin-left: 1px;
	}
`;
