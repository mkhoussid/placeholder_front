import * as React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

interface PageProps {
	title: string;
	className?: string;
	children: React.ReactNode;
}
const Page: React.FC<PageProps> = React.memo(({ children, className, title }) => {
	return (
		<Wrapper>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Container className={className}>{children}</Container>
		</Wrapper>
	);
});

export default Page;

const Wrapper = styled.div`
	height: 100%;
`;

const Container = styled.div`
	position: relative;
	height: 100%;
`;
