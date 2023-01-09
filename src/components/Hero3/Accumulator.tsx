import * as React from 'react';
import styled from '@emotion/styled';

const Accumulator = React.memo(() => {
    return <Container>Accumulator</Container>;
});

export default Accumulator;

const Container = styled.div``;

$total: 200;
$time: 10s;

html, body, .wrap {
	height: 100%;
}

body {
	background: black;
	background-image: radial-gradient(circle at center, white 0%, #222 10%, black 60%);
	overflow: hidden;
}

.wrap {
	transform-style: preserve-3d;
	perspective: 800px;
}

.tri {
	height: 0;
	width: 0;
	position: absolute;
	top: 50%;
	left: 50%;
}

@for $i from 1 through $total {
	$size: random(50) * 1px;
	$rotate: random(360) * 1deg;
	.tri:nth-child(#{$i}){
		border-top: $size solid hsla(random(360), 100%, 50%, 1);
		border-right: $size solid transparent;
		border-left: $size solid transparent;
		margin-left: -$size/2;
		margin-top: -$size/2;
		-webkit-filter: grayscale(1);
		filter: grayscale(1);
		transform: rotate($rotate) translate3d(0,0,-1500px) scale(0);
		animation: anim#{$i} $time infinite linear;
		animation-delay: $i * -($time/$total);
		opacity: 0;
	}
	
	@keyframes anim#{$i}{
		0% {
			opacity: 1;
			transform: rotate($rotate * 1.5) translate3d(random(1000) * 1px, random(1000) * 1px,1000px) scale(1);
		}
	}
}