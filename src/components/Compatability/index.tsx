import * as React from 'react';
import { Link } from 'react-router-dom';
import media from 'src/assets/media/cdn';
import styled from '@emotion/styled';

const Compatability = React.memo(() => {
	return (
		<Main>
			<Container>
				<Mac>
					<Image src={media['mac.webp']} />
					<Link
						to={{ pathname: 'https://www.akvavir.ru/' }}
						target='_blank'
						rel='noreferrer'
					>
						<ImageBox></ImageBox>
					</Link>
				</Mac>
				<MacBook>
					<Image src={media['macbook.webp']} />
					<Link
						to={{ pathname: 'https://www.akvavir.ru/' }}
						target='_blank'
						rel='noreferrer'
					>
						<ImageBox></ImageBox>
					</Link>
				</MacBook>
				<IPhone>
					<Image src={media['iphone.webp']} />
					<Link
						to={{ pathname: 'https://www.akvavir.ru/' }}
						target='_blank'
						rel='noreferrer'
					>
						<ImageBox></ImageBox>
					</Link>
				</IPhone>
			</Container>
		</Main>
	);
});

export default Compatability;

const Main = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #2196f3;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 80%;
	min-height: 100vh;
	overflow: hidden;
`;

const ImageBox = styled.div``;

const Mac = styled.div`
	position: absolute;
	top: 20%;
	left: 20%;
	width: 606px;
	height: 489px;

	&:hover {
		${ImageBox} {
			background-position: bottom;
		}
	}

	${ImageBox} {
		position: absolute;
		top: 24px;
		left: 25px;
		width: 555px;
		height: 313px;
		background: url(${media['akvavir_web.webp']});
		background-position: top;
		background-size: 100%;
		transition: 5s;
	}
`;

const MacBook = styled.div`
	position: absolute;
	top: 40%;
	right: 10%;
	z-index: 1;
	width: 609px;
	height: 362px;

	&:hover {
		${ImageBox} {
			background-position: bottom;
		}
	}

	${ImageBox} {
		position: absolute;
		top: 20px;
		left: 72px;
		width: 465px;
		height: 291px;
		background: url(${media['akvavir_web.webp']});
		background-position: top;
		background-size: 100%;
		transition: 5s;
	}
`;

const IPhone = styled.div`
	position: absolute;
	top: 40%;
	left: 12%;
	z-index: 2;
	width: 245px;
	height: 383px;

	&:hover {
		${ImageBox} {
			background-position: bottom;
		}
	}

	${ImageBox} {
		position: absolute;
		top: 46px;
		left: 44px;
		width: 157px;
		height: 282px;
		background: url(${media['akvavir_mobile.webp']});
		background-position: top;
		background-size: 100%;
		transition: 5s;
	}
`;

const Image = styled.img``;
