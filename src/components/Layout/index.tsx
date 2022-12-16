import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Error from './Error';
import Header from './Header';
import { useStore } from 'effector-react';
import { $serverError } from 'src/features/core/effector/store';
import SandboxPage from 'src/pages/Sandbox';

type TOutletContext = {
	isMobile: boolean;
};

declare module 'react-router-dom' {
	export function useOutletContext(): TOutletContext;
}

interface LayoutProps {
	isMobile: boolean;
}
const Layout: React.FC<LayoutProps> = React.memo(({ isMobile }) => {
	const serverError = useStore($serverError);

	// return <SandboxPage />;

	return (
		<Wrapper isServerError={!!serverError}>
			<HeaderWrapper className='no_error'>
				<Header />
			</HeaderWrapper>
			<BodyWrapper>
				<Outlet
					context={{
						isMobile,
					}}
				/>
			</BodyWrapper>
			<FooterWrapper className='no_error'>I'm the footer</FooterWrapper>
		</Wrapper>
	);
});

export default Layout;

const Wrapper = styled.div<{ isServerError: boolean }>`
	${({ isServerError }) => `
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;

		${
			isServerError
				? `
					.no_error {
						display: none;
					}

					> div {
						height: 100vh;
					}
				`
				: ``
		}
		}
	`}
`;

const Part = styled.div``;

const HeaderWrapper = styled(Part)`
	background-color: lightblue;
	height: 5rem;
`;

const BodyWrapper = styled(Part)`
	${({ theme }) => `
		background-color: ${theme.palette.background.main};
	`}
`;

const FooterWrapper = styled(Part)`
	background-color: lightpurple;
	height: 10rem;
`;
