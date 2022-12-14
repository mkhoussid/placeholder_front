import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Error from './Error';
import Header from './Header';

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
	const pageError = false;
	return (
		<RootLayout>
			<Wrapper>
				<TopSide>
					<Header />
				</TopSide>
				<LeftSide>{'left'}</LeftSide>
				<Middle isPageError={!!pageError}>
					{pageError ? (
						<Error />
					) : (
						<Outlet
							context={{
								isMobile,
							}}
						/>
					)}
				</Middle>
				<RightSide>{'right'}</RightSide>
				<Bottom>{'bottom'}</Bottom>
			</Wrapper>
		</RootLayout>
	);
});

export default Layout;

const RootLayout = styled.div`
	${({ theme }) => `
		height: 100%;
		width: 100%;
		background-color: ${theme.palette.background.main};
	`}
`;

const Wrapper = styled.div`
	height: 100%;
	display: grid;
	position: relative;
	width: 100%;
	grid-template: auto 1fr auto / auto 1fr auto;
`;

const TopSide = styled.div`
	grid-column: 1 / 4;
`;

const LeftSide = styled.div`
	grid-column: 1 / 2;
	padding: 2rem;

	@media (max-width: 767px) {
		display: none;
	}
`;

const Middle = styled.div<{ isPageError: boolean }>`
	${({ isPageError, theme }) => `
	grid-column: 2 / 3;
	width: 100%;
	// background: ${theme.palette.background.main};
	height: calc(100%);
	margin-top: 0rem;
	${
		isPageError
			? `
				display: flex;
				align-items: center;
				justify-content: center;
			`
			: ''
	}

`}
`;

const RightSide = styled.div`
	background-color: red;
	grid-column: 3 / 4;
`;

const Bottom = styled.div`
	grid-column: 1 / 4;
	background-color: cyan;
`;
