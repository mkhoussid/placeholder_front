import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import Error from './Error';
import Header from './Header';
import Footer from './Footer';
import { useStore } from 'effector-react';
import { $serverError, $layout } from 'src/features/core/effector/store';
import SandboxPage from 'src/pages/Sandbox';
import { HEADER_HEIGHT_IN_REM } from 'src/constants';

const Layout = React.memo(() => {
	const serverError = useStore($serverError);
	const layout = useStore($layout);
	// return <SandboxPage />;

	return (
		<Wrapper isServerError={!!serverError}>
			{layout.visibility.header && (
				<HeaderWrapper className='no_error'>
					<Header />
				</HeaderWrapper>
			)}
			<BodyWrapper>
				<Outlet />
			</BodyWrapper>
			{layout.visibility.footer && (
				<FooterWrapper className='no_error'>
					<Footer />
				</FooterWrapper>
			)}
		</Wrapper>
	);
});

export default Layout;

const Wrapper = styled.div<{ isServerError: boolean }>`
	${({ isServerError, theme }) => `
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		background-color: ${theme.palette.background.main};
		// TODO light mode background: linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);

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

const Part = styled.div`
	width: 100%;
	height: 100%;
`;

const HeaderWrapper = styled(Part)`
	z-index: 5;
	height: 0rem;
`;

const BodyWrapper = styled(Part)`
	height: 100%;
`;

const FooterWrapper = styled(Part)``;
