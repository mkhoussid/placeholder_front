import * as React from 'react';
import styled from '@emotion/styled';

const HamburgerMenu = React.memo(() => {
	const [open, setOpen] = React.useState(false);

	const toggleOpen = React.useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<Container onClick={toggleOpen}>
			<Button>
				<Icon open={open} />
			</Button>
		</Container>
	);
});

export default HamburgerMenu;

const Container = styled.div`
	height: 100%;
`;

const Button = styled.div`
	transition-duration: 0.5s;
	cursor: pointer;
	position: relative;
`;

const Icon = styled.div<{ open: boolean }>`
	${({ open, theme }) => `
        transition-duration: 0.5s;
        height: 0.125rem;
        width: 2rem;
        top: 0.5rem;
        background-color: ${theme.palette.common.white};
        ${open ? 'transition: 0.5s;' : ''}
        position: relative;

        &:before {
            transition-duration: 0.5s;
            position: absolute;
            width: 2rem;
            height: 0.125rem;
            background-color: ${theme.palette.common.white};
            content: "";
            top: -0.5rem;
            transform: ${open ? 'rotateZ(-45deg) scaleX(0.75) translate(-0.5rem, -6px)' : 'none'};
        }

        &:after {
            transition-duration: 0.5s;
            width: 2rem;
            position: absolute;
            height: 0.125rem;
            background-color: ${theme.palette.common.white};
            content: "";
            top: 0.5rem;
            transform: ${open ? 'rotateZ(45deg) scaleX(0.75) translate(-0.5rem, 6px)' : 'none'};
        }
    `}
`;
