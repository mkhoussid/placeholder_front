import * as React from 'react';
import styled from '@emotion/styled';
import Typography, { ETypographySize, ETypographyVariant } from '../Typography';
import { useStore } from 'effector-react';
import { $isMobile, $requestLoading } from 'src/features/core/effector/store';
import { css, useTheme } from '@emotion/react';
import Spinner from '../Spinner';

type ButtonProps = {
	text: string;
	variant?: ETypographyVariant;
	size?: ETypographySize;
	disableOnRequestLoading?: boolean;
	disabled?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
const Button = React.memo(
	React.forwardRef(
		(
			{
				text,
				onClick,
				variant = ETypographyVariant.WHITE,
				size = ETypographySize.LG,
				disableOnRequestLoading,
				disabled = false,
				...props
			}: ButtonProps,
			ref,
		) => {
			const theme = useTheme();
			const isMobile = useStore($isMobile);
			const requestLoading = useStore($requestLoading);

			const handleClick = React.useCallback(
				(e: React.MouseEvent<HTMLDivElement>) => {
					e.stopPropagation();

					if (requestLoading) return;

					onClick?.(e);
				},
				[onClick, requestLoading],
			);

			return (
				<Container
					onClick={handleClick}
					isMobile={isMobile}
					disabled={(disableOnRequestLoading && requestLoading) || disabled}
					ref={ref}
					{...props}
				>
					{disableOnRequestLoading && requestLoading ? (
						<Spinner size={40} color={theme.palette.common.white} />
					) : (
						<Typography
							variant={variant}
							size={size}
							placement={'center'}
							text={text}
						/>
					)}
				</Container>
			);
		},
	),
);

export default Button;

const Container = styled.div<{ isMobile: boolean; disabled: boolean }>`
	${({ isMobile, disabled }) => css`
		height: 3rem;
		text-align: center;
		width: auto;
		cursor: ${disabled ? 'progress' : 'pointer'};
		color: #fff;
		transition: all 0.5s;
		position: relative;
		padding: ${isMobile ? '1' : '0.5'}rem 1rem;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(255, 255, 255, 0.1);
			transition: all 0.3s;
		}

		&:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			opacity: 0;
			transition: all 0.3s;
			border: 1px solid rgba(255, 255, 255, 0.5);
			transform: scale(1.2, 1.2);
		}

		&:hover {
			${!disabled
				? `
						&:after {
							opacity: 1;
							transform: scale(1,1);
						}

						&:before {
							opacity: 0 ;
							transform: scale(0.5,0.5);
						}
					`
				: ``}
		}
	`}
`;
