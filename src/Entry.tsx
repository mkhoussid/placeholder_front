import * as React from 'react';
import App from './App';
import { useMediaQuery } from './hooks';

const Entry = React.memo(() => {
	const isMobile = useMediaQuery(`(max-width: ${import.meta.env.VITE_MAX_WIDTH}px)`);

	React.useEffect(() => {
		const site = window.location.href;

		if ((/\/\/m\./.test(site) && isMobile) || (!/\/\/m\./.test(site) && !isMobile)) return;

		window.location.href = isMobile
			? import.meta.env.VITE_CLIENT_PATH_MOBILE
			: import.meta.env.VITE_CLIENT_PATH_DESKTOP;
	}, [isMobile]);

	return <App isMobile={isMobile} />;
});

export default Entry;
