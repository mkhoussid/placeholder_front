import * as React from 'react';
import styled from '@emotion/styled';
import { Button, FlexContainer, Typography } from 'src/components/ui';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { $dictionary, $serverError } from 'src/features/core/effector/store';
import { useStore } from 'effector-react';
import { useMediaQuery, useNavigateParams } from 'src/hooks';
import { uris, Redirect } from 'src/router';
import { setServerError } from 'src/features/core/effector/actions';
import AnimatedCup from './AnimatedCup';

const Error = React.memo(() => {
	const serverError = useStore($serverError);
	const dictionary = useStore($dictionary);
	const navigate = useNavigateParams();
	const isMobileQueryMatch = useMediaQuery(`(max-width: ${import.meta.env.VITE_MAX_WIDTH}px)`);

	const handleNavigateToHome = React.useCallback(() => {
		navigate({ uri: uris.ROOT });
		setServerError({ payload: { serverError: null } });
	}, []);

	const handleRefreshPage = React.useCallback(() => {
		window.location.href = isMobileQueryMatch
			? import.meta.env.VITE_CLIENT_PATH_MOBILE
			: import.meta.env.VITE_CLIENT_PATH_DESKTOP;
	}, [isMobileQueryMatch]);

	if (!serverError) {
		return <Redirect to={uris.ROOT} />;
	}

	return (
		<Container fullHeightAndWidth={false}>
			<Content>
				<AnimatedCup />
				<Typography
					size={ETypographySize.XXXL}
					variant={ETypographyVariant.WHITE}
					placement={'center'}
					text={serverError.title}
				/>
				<Typography
					size={ETypographySize.XXL}
					variant={ETypographyVariant.WHITE}
					gutterBottom
					placement={'center'}
					text={serverError.details}
				/>
				{dictionary ? (
					<Button
						text={navigator.language === 'ru-RU' ? 'На гланую' : 'Back home'}
						onClick={handleNavigateToHome}
					/>
				) : (
					<Button
						text={navigator.language === 'ru-RU' ? 'Обновить' : 'Refresh'}
						onClick={handleRefreshPage}
					/>
				)}
			</Content>
		</Container>
	);
});

export default Error;

const Container = styled(FlexContainer)`
	height: 100%;
	z-index: 10;
`;

const Content = styled(FlexContainer)`
	flex-direction: column;
	height: auto;
	z-index: 10;
`;
