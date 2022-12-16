import * as React from 'react';
import styled from '@emotion/styled';

const InjectCssVars = React.memo((props: React.HTMLAttributes<HTMLDivElement>) => {
	return <Styles {...props} />;
});

export default InjectCssVars;

const Styles = styled.div`
	display: none;
`;
