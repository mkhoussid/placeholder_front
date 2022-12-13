import React from 'react';
import styled from '@emotion/styled';

export enum EPlacement {
	'start' = 'flex-start',
	'center' = 'center',
	'end' = 'flex-end',
}

export type TFlexPlacement = 'start' | 'center' | 'end';

type TFlexContainer = {
	className?: string;
	placement?: TFlexPlacement;
	fullHeightAndWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
const FlexContainer = React.memo(
	React.forwardRef(
		(
			{
				className,
				children,
				placement = 'start',
				fullHeightAndWidth = true,
				...props
			}: TFlexContainer,
			ref,
		) => {
			return (
				<Container
					ref={ref as React.RefObject<HTMLDivElement>}
					fullHeightAndWidth={fullHeightAndWidth}
					className={className}
					placement={placement}
					{...props}
				>
					{children}
				</Container>
			);
		},
	),
);

export default FlexContainer;

const Container = styled.div<{ placement: TFlexPlacement; fullHeightAndWidth: boolean }>`
	${({ placement, fullHeightAndWidth }) => `
        display: flex;
        align-items: center;
        justify-content: ${EPlacement[placement]};
        position: relative;
        height: ${fullHeightAndWidth ? '100%' : 'auto'};
        width: ${fullHeightAndWidth ? '100%' : 'auto'};
    `}
`;
