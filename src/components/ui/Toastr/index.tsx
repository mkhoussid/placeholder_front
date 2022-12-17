import * as React from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import { $isToastrExpiring, $showToastr, $toastrContent } from './effector/store';
import { CloseIcon, Icon } from 'src/assets/icons';
import { css, keyframes } from '@emotion/react';
import { setShowToastr } from './effector/actions';

const Toastr = React.memo(() => {
	const showToastr = useStore($showToastr);
	const toastrContent = useStore($toastrContent);
	const isToastrExpiring = useStore($isToastrExpiring);

	React.useEffect(() => {
		setTimeout(() => {
			setShowToastr({ payload: { showToastr: true } });
		}, 250);
	}, []);

	return (
		<Wrapper className='toastr_root'>
			<ToastContainer showToastr={showToastr}>
				<Toast>
					<ToastBody>Toast body!</ToastBody>
					<Icon icon={CloseIcon} />
					<ToastProgressBar
						role='progressbar'
						aria-hidden='false'
						isToastrExpiring={isToastrExpiring}
					/>
				</Toast>
			</ToastContainer>
		</Wrapper>
	);
});

export default Toastr;

const Wrapper = styled.div`
	box-sizing: border-box;
`;

const slideIn = keyframes`
    0% {
        transform: translateX(-31rem);
    }
    60% {
        transform: translateX(3rem);
    }
    80% {
        transform: translateX(-2rem);
    }
    90% {
        transform: translateX(2rem);
    }
    100% {
        transform: translateX(0);
    }
`;

const ToastContainer = styled.div<{ showToastr: boolean }>`
	${({ theme, showToastr }) => css`
		top: 1rem;
		left: 1rem;
		z-index: 10;
		transform: translateZ(10px);
		transition: 0.3s ease-in-out;
		position: fixed;
		padding: 4px;
		width: 30rem;
		box-sizing: border-box;
		color: ${theme.palette.common.black};
		background: pink;
		animation: ${showToastr ? slideIn : slideIn} 0.5s cubic-bezier(0.73, 0.13, 0.41, 0.84);
	`}
`;

const Toast = styled.div`
	${({ theme }) => `
        background: yellow;
        color: ${theme.palette.common.black};

        position: relative;
        min-height: 5rem;;
        box-sizing: border-box;
        margin-bottom: 1rem;
        padding: 8px;
        border-radius: 4px;
        box-shadow: 0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%);
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        cursor: pointer;
        direction: ltr;
    `}
`;

const ToastBody = styled.div`
	margin: auto 0;
	flex: 1 1 auto;
	padding: 6px;
	display: flex;
	align-items: center;
`;

const expire = keyframes`
    0% {
        transform: scaleX(1);
    } to {
        transform: scaleX(0);
    }
`;

const ToastProgressBar = styled.div<{ isToastrExpiring: boolean }>`
	${({ isToastrExpiring }) => css`
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 10px;
		z-index: 40;
		opacity: 1;
		transform-origin: left;
		background: purple;
		animation: ${expire} linear 1 forwards;
		animation-duration: 15000ms;
		animation-play-state: ${isToastrExpiring ? 'running' : 'paused'};
	`}
`;
