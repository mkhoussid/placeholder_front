import * as React from 'react';

type TUseTimeout = {
	timeoutInMs?: number;
	cb: (...params: any[]) => void;
	dependency?: any;
};
const useTimeout = ({ cb, timeoutInMs = 500, dependency = null }: TUseTimeout) => {
	const savedCallback = React.useRef(cb);

	React.useEffect(() => {
		savedCallback.current = cb;
	}, [cb]);

	React.useEffect(() => {
		if (!timeoutInMs && timeoutInMs !== 0) {
			return;
		}

		const id = setTimeout(() => savedCallback.current(), timeoutInMs);

		return () => clearTimeout(id);
	}, [timeoutInMs, dependency]);
};

export default useTimeout;
