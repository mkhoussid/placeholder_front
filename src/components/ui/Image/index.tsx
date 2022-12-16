import * as React from 'react';
import styled from '@emotion/styled';
import { useOutletContext } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $isMobile } from 'src/features/core/effector/store';

type ImageProps = {
	url: string;
} & React.HTMLAttributes<HTMLDivElement>;
const Image = React.memo(({ url, ...props }: ImageProps) => {
	const isMobile = useStore($isMobile);

	return (
		<Container className='imggggg' {...props}>
			<Img url={url} isMobile={isMobile} />
		</Container>
	);
});

export default Image;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const Img = styled.div<{ url: string; isMobile: boolean }>`
	${({ url, isMobile }) => `
        display: block;
        background-image: url(${url});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 0;
        padding-top: ${isMobile ? 25 : 20}%; /* (img-height / img-width * container-width) */
    `}
`;
