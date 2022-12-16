import * as React from 'react';
import App from './App';
import { setIsMobile } from './features/core/effector/actions';
import { useMediaQuery } from './hooks';

const Entry = React.memo(() => {
	const isMobileQueryMatch = useMediaQuery(`(max-width: ${import.meta.env.VITE_MAX_WIDTH}px)`);

	React.useEffect(() => {
		const site = window.location.href;

		if ((/\/\/m\./.test(site) && isMobileQueryMatch) || (!/\/\/m\./.test(site) && !isMobileQueryMatch))
			return;

		window.location.href = isMobileQueryMatch
			? import.meta.env.VITE_CLIENT_PATH_MOBILE
			: import.meta.env.VITE_CLIENT_PATH_DESKTOP;
	}, [isMobileQueryMatch]);

	React.useEffect(() => {
		setIsMobile({ payload: { isMobile: isMobileQueryMatch } });
	}, [isMobileQueryMatch]);

	return <App />;
});

export default Entry;
