import * as React from 'react';
import styled from '@emotion/styled';
import Typography, { ETypographySize, ETypographyVariant } from '../Typography';
import { useOutletContext } from 'react-router-dom';

type ButtonProps = {
	text: string;
	variant?: ETypographyVariant;
	size?: ETypographySize;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;
const Button = React.memo(
	({ text, onClick, variant = ETypographyVariant.WHITE, size = ETypographySize.LG, ...props }: ButtonProps) => {
		const { isMobile } = useOutletContext();

		const handleClick = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();

			onClick?.(e);
		}, []);

		return (
			<Container onClick={handleClick} isMobile={isMobile} {...props}>
				<Typography variant={variant} size={size}>
					{text}
				</Typography>
			</Container>
		);
	},
);

export default Button;

const Container = styled.div<{ isMobile: boolean }>`
	${({ theme, isMobile }) => `
		height: auto;
		text-align: center;
		width: auto;
		cursor: pointer;
		color: #FFF;
		transition: all 0.5s;
		position: relative;
		padding: ${isMobile ? 1 : 0.5}rem;
	 
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(255,255,255,0.1);
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
			border: 1px solid rgba(255,255,255,0.5);
			transform: scale(1.2,1.2);
		}

		&:hover {
			&:after {
				opacity: 1;
				transform: scale(1,1);
			}

			&:before {
				opacity: 0 ;
				transform: scale(0.5,0.5);
			}
		}
	`}
`;
