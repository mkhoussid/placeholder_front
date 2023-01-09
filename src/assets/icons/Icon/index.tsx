import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'src/components/ui';

interface IconProps {
	className?: string;
	fillColor?: string;
	icon: React.ElementType;
	onClick?: () => void;
	disabledButton?: boolean;
}
const Icon: React.FC<IconProps> = React.memo(({ className, fillColor, icon, onClick, disabledButton = false }) => {
	const handleClick = React.useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			if (disabledButton) return;

			e.stopPropagation();

			onClick?.();
		},
		[onClick, disabledButton],
	);

	return (
		<Container className={className} onClick={handleClick} disabledButton={disabledButton}>
			<SvgIcon fillColor={fillColor} as={icon} />
		</Container>
	);
});

export default Icon;

const SvgIcon = styled.svg<{ fillColor?: string }>``;

const Container = styled((props: any) => <FlexContainer {...props} />)<{ disabledButton: boolean }>`
	${({ theme, disabledButton }) => `
		width: 2rem;
		height: 2rem;
		cursor: ${disabledButton ? 'default' : 'pointer'};
		border-radius: 50%;
		padding: 0.25rem;
		transition: 0.3s ease-in-out;

		&:hover {
			${disabledButton ? '' : `background: ${theme.palette.common.steel};`}
		}
	`}
`;
