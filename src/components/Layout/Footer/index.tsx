import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'src/components/ui';
import { FOOTER_HEIGHT_IN_REM } from 'src/constants';

const Footer = React.memo(() => {
	return <Container placement='center'>{`I'm a footer`}</Container>;
});

export default Footer;

const Container = styled(FlexContainer)`
	flex-direction: column;
	height: ${FOOTER_HEIGHT_IN_REM}rem;
	background-color: red;
`;
