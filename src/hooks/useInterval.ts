import * as React from 'react';

type TUseInterval = {
	delay?: number;
	ms: number;
	cb: (...params: any[]) => void;
};
const useInterval = ({ cb, ms, delay = 0 }: TUseInterval) => {
	const savedCallback = React.useRef(() => undefined as any);

	React.useEffect(() => {
		savedCallback.current = cb;
	}, [cb]);

	React.useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		let id: NodeJS.Timer;
		setTimeout(() => {
			id = setInterval(tick, ms);
		}, delay);

		return () => {
			clearInterval(id);
		};
	}, []);
};

export default useInterval;
