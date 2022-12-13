import * as React from 'react';
import styled from '@emotion/styled';

import { useOutletContext } from 'react-router-dom';

const Landing = React.memo(() => {
	const { isMobile } = useOutletContext();

	return <Container>landing component</Container>;
});

export default Landing;

const Container = styled.div`
	height: 100%;
`;
