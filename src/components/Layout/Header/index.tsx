import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer, Typography } from 'src/components/ui';
import { Icon, MenuIcon } from 'src/assets/icons';
import { useTheme } from '@emotion/react';
import { useStore } from 'effector-react';
import { $user } from 'src/features/auth/effector/store';
import { setHeaderLinks } from 'src/features/core/effector/actions';
import { authenticatedLinks, navigationLinks, unauthenticatedLinks } from 'src/features/core/stock/header';
import { $dictionary, $headerLinks } from 'src/features/core/effector/store';
import { HEADER_HEIGHT_IN_REM } from 'src/constants';
import { useNavigateParams } from 'src/hooks';
import { generatePath } from 'src/utils';
import { ETypographyVariant } from 'src/components/ui/Typography';
import { useLocation } from 'react-router-dom';

const Header = React.memo(() => {
	const theme = useTheme();
	const user = useStore($user);
	const headerLinks = useStore($headerLinks);
	const dictionary = useStore($dictionary);
	const navigate = useNavigateParams();
	const { pathname } = useLocation();

	React.useEffect(() => {
		if (!dictionary) return;

		setHeaderLinks({
			payload: {
				headerLinks: {
					authenticationLinks: user
						? authenticatedLinks(dictionary)
						: unauthenticatedLinks(dictionary),
					navHeaderLinks: navigationLinks(dictionary),
				},
			},
		});
	}, [user, dictionary]);

	const handleHeaderLinkClick = React.useCallback(
		(uri: string) => () => {
			navigate({ uri: generatePath({ uri }) });
		},
		[],
	);

	const getIsActive = React.useCallback(
		({ uri, pathname }: { uri: string; pathname: string }) => uri === pathname,
		[],
	);

	return (
		<Container>
			<MenuIconStyled icon={MenuIcon} fillColor={theme.palette.common.white} />

			<HeaderLinksLeftContainer placement='start'>
				{headerLinks.navHeaderLinks.map(({ label, uri }) => (
					<HeaderLink
						onClick={handleHeaderLinkClick(uri)}
						isActive={getIsActive({ uri, pathname })}
					>
						<Typography variant={ETypographyVariant.WHITE}>{label}</Typography>
					</HeaderLink>
				))}
			</HeaderLinksLeftContainer>
			<HeaderLinksRightContainer placement='end'>
				{headerLinks.authenticationLinks.map(({ label, uri }) => (
					<HeaderLink
						onClick={handleHeaderLinkClick(uri)}
						isActive={getIsActive({ uri, pathname })}
					>
						<Typography variant={ETypographyVariant.WHITE}>{label}</Typography>
					</HeaderLink>
				))}
			</HeaderLinksRightContainer>
		</Container>
	);
});

export default Header;

const Container = styled(FlexContainer)`
	height: ${HEADER_HEIGHT_IN_REM}rem;
	width: 100%;
`;

const MenuIconStyled = styled(Icon)``;

const HeaderLinksRightContainer = styled(FlexContainer)`
	flex-grow: 1;
	justify-content: flex-end;
`;

const HeaderLinksLeftContainer = styled(FlexContainer)``;

const HeaderLink = styled.div<{ isActive: boolean }>`
	${({ theme, isActive }) => `
		margin: 1rem;
		position: relative;
		height: 3rem;
		cursor: pointer;

		&:after {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			content: '';
			height: 0.1rem;
			transition: opacity 0.3s;
			background: radial-gradient(circle at 50% 48%, #fff 0, ${theme.palette.primary.light} 70%, transparent 100%);
			opacity: ${isActive ? 1 : 0};
		}
	`}
`;
