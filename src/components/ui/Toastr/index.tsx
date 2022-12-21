import * as React from 'react';
import styled from '@emotion/styled';
import { useStore } from 'effector-react';
import { $isToastrExpiring, $toastrContent } from './effector/store';
import { CloseIcon, Icon } from 'src/assets/icons';
import { css, keyframes, useTheme } from '@emotion/react';
import { setToastrContent } from './effector/actions';
import { useInterval, useTimeout } from 'src/hooks';

type ToastrProps = {
	animationDuration?: number;
	animationSpeedMs?: number;
};
const Toastr = React.memo(({ animationSpeedMs = 500, animationDuration = 5000 }: ToastrProps) => {
	const theme = useTheme();
	const [showTimeout, setShowTimeout] = React.useState<NodeJS.Timeout>();
	const [localShow, setLocalShow] = React.useState(false);

	const toastrContent = useStore($toastrContent);
	const isToastrExpiring = useStore($isToastrExpiring);

	React.useEffect(() => {
		let autoCloseInterval: NodeJS.Timeout;

		if (toastrContent) {
			setLocalShow(true);
		} else {
			setTimeout(() => {
				setLocalShow(false);
			}, animationSpeedMs);
		}
	}, [toastrContent]);

	const handleClose = React.useCallback(() => {
		setLocalShow(false);

		setTimeout(() => {
			setToastrContent({
				payload: { toastrContent: { title: '', message: '' } },
			});
		}, animationSpeedMs);
	}, [toastrContent, showTimeout]);

	// TODO, fix interval for some reason
	useTimeout({ timeoutInMs: animationDuration + animationSpeedMs, cb: handleClose, dependency: toastrContent });

	if (!toastrContent.title) {
		return null;
	}

	return (
		<ToastContainer showToastr={localShow} animationSpeedMs={animationSpeedMs}>
			<Toast>
				<ToastContent>
					<ToastrTitle>{toastrContent.title}</ToastrTitle>
					<ToastrMessage>{toastrContent.message}</ToastrMessage>
				</ToastContent>
				<Icon onClick={handleClose} icon={CloseIcon} fillColor={theme.palette.common.white} />
				<ToastProgressBar
					role='progressbar'
					aria-hidden='false'
					isToastrExpiring={isToastrExpiring}
					animationDuration={animationDuration}
				/>
			</Toast>
		</ToastContainer>
	);
});

export default Toastr;

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

const slideOut = keyframes`
    0% {
        transform: translateX(0);
    }
    60% {
        transform: translateX(2rem);
    }
    80% {
        transform: translateX(-2rem);
    }
    90% {
        transform: translateX(3rem);
    }
    100% {
        transform: translateX(-31rem);
    }
`;

const ToastContainer = styled.div<{ showToastr: boolean; animationSpeedMs: number }>`
	${({ showToastr, animationSpeedMs }) => css`
		top: 0.5rem;
		left: 0.5rem;
		z-index: 10;
		transform: translateX(${showToastr ? '0' : '-31rem'});
		position: fixed;
		padding: 1rem;
		width: 30rem;
		box-sizing: border-box;
		background: transparent;
		animation: ${showToastr ? slideIn : slideOut} ${animationSpeedMs}ms
			cubic-bezier(${showToastr ? '0.73, 0.13, 0.41, 0.84' : '0.16, 0.48, 0.93, 0.46'});
	`}
`;

const Toast = styled.div`
	${({ theme }) => `
        color: ${theme.palette.common.white};
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(0.25rem);
        transform-style: preserve-3d;

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

const ToastContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const expire = keyframes`
    0% {
        transform: scaleX(1);
    } to {
        transform: scaleX(0);
    }
`;

const ToastProgressBar = styled.div<{ isToastrExpiring: boolean; animationDuration: number }>`
	${({ isToastrExpiring, animationDuration }) => css`
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.25rem;
		z-index: 40;
		opacity: 1;
		transform-origin: left;
		background: #68227a;
		animation: ${expire} linear 1 forwards;
		animation-duration: ${animationDuration}ms;
		animation-play-state: ${isToastrExpiring ? 'running' : 'paused'};
	`}
`;

const ToastrTitle = styled.div``;

const ToastrMessage = styled.div``;
