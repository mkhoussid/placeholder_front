import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer, Typography } from 'src/components/ui';
import { Icon, MenuIcon } from 'src/assets/icons';
import { useTheme } from '@emotion/react';
import { useStore } from 'effector-react';
import { $user } from 'src/features/auth/effector/store';
import { setHeaderLinks } from 'src/features/core/effector/actions';
import { authLinks, stockLinks } from 'src/features/core/stock/header';
import { $headerLinks } from 'src/features/core/effector/store';
import { HEADER_HEIGHT_IN_REM } from 'src/constants';

const Header = React.memo(() => {
	const theme = useTheme();
	const user = useStore($user);
	const headerLinks = useStore($headerLinks);

	React.useEffect(() => {
		setHeaderLinks({ payload: { headerLinks: user ? authLinks : stockLinks } });
	}, [user]);

	const handleHeaderLinkClick = React.useCallback(
		(uri: string) => () => {
			console.log('uri', uri);
		},
		[],
	);

	return (
		<Container>
			<MenuIconStyled icon={MenuIcon} fillColor={theme.palette.common.white} />
			<HeaderLinksContainer>
				{headerLinks.map(({ label, uri }) => (
					<HeaderLink onClick={handleHeaderLinkClick(uri)}>
						<Typography>{label}</Typography>
					</HeaderLink>
				))}
			</HeaderLinksContainer>
		</Container>
	);
});

export default Header;

const Container = styled(FlexContainer)`
	height: ${HEADER_HEIGHT_IN_REM}rem;
	width: 100%;
`;

const MenuIconStyled = styled(Icon)`
	margin: 1rem;
`;

const HeaderLinksContainer = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const HeaderLink = styled.div`
	margin: 1rem;
`;
