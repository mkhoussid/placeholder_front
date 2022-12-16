import * as React from 'react';
import styled from '@emotion/styled';
import { Button, FlexContainer, Image, Typography } from 'src/components/ui';
import { TServerErrorMatrixContent } from 'src/constants';
import { ETypographySize, ETypographyVariant } from 'src/components/ui/Typography';
import { $serverError } from 'src/features/core/effector/store';
import { useStore } from 'effector-react';
import { useNavigateParams } from 'src/hooks';
import { uris, Redirect } from 'src/router';
import { setServerError } from 'src/features/core/effector/actions';
import { cdn } from 'src/assets/media';

const Error = React.memo(() => {
	const serverError = useStore($serverError);
	const navigate = useNavigateParams();

	const handleNavigateToHome = React.useCallback(() => {
		navigate({ uri: uris.HOME });
		setServerError({ payload: { serverError: null } });
	}, []);

	if (!serverError) {
		return <Redirect to={uris.HOME} />;
	}

	return (
		<Container fullHeightAndWidth={false}>
			<Content>
				<Image url={cdn['error.png']} />
				<Typography
					containerProps={{ placement: 'center' }}
					size={ETypographySize.XXXXL}
					variant={ETypographyVariant.WHITE}
				>
					{serverError.title}
				</Typography>
				<Typography
					containerProps={{ placement: 'center' }}
					size={ETypographySize.XXL}
					variant={ETypographyVariant.WHITE}
					gutterBottom
				>
					{serverError.details}
				</Typography>
				<Button text={'На главную'} onClick={handleNavigateToHome} />
			</Content>
		</Container>
	);
});

export default Error;

const Container = styled(FlexContainer)`
	height: 100%;
`;

const Content = styled(FlexContainer)`
	flex-direction: column;
	height: auto;
`;
