import React from 'react';
import styled from '@emotion/styled';

const Layout = React.memo(() => {
	return (
		<Main>
			<Parent>
				<Header>I'm the header</Header>
				<Body>I'm the body</Body>
				<Footer>I'm the footer</Footer>
			</Parent>
		</Main>
	);
});

export default Layout;

const Main = styled.div`
	height: 100vh;
	width: 100%;
`;

const Parent = styled.div`
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

const Part = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
`;

const Header = styled(Part)`
	background-color: lightblue;
	height: 5rem;
`;

const Body = styled(Part)`
	background-color: lightgreen;
`;

const Footer = styled(Part)`
	background-color: lightpurple;
	height: 10rem;
`;
