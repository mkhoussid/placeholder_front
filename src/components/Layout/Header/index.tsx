import * as React from 'react';
import styled from '@emotion/styled';
import { FlexContainer } from 'src/components/ui';

const Header = React.memo(() => {
	return <Container placement='center'>{`I'm a header`}</Container>;
});

export default Header;

const Container = styled(FlexContainer)`
	flex-direction: column;
`;
