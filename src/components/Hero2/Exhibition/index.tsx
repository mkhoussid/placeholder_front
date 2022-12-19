import * as React from 'react';
import styled from '@emotion/styled';
import { Swiper } from 'src/components/ui';

const Exhibition = React.memo(() => {
	return (
		<Container>
			<Swiper />
		</Container>
	);
});

export default Exhibition;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
