import * as React from 'react';
import styled from '@emotion/styled';

type SuspenseProps = {
	component: any;
} & Record<string, any>;
const Suspense = React.memo(({ component: Component, ...props }: SuspenseProps) => {
	return (
		<React.Suspense fallback={<FallBack>loading</FallBack>}>
			<Component {...props} />
		</React.Suspense>
	);
});

export default Suspense;

const FallBack = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
	width: 100%;
`;
