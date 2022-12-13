import * as React from 'react';
import App from './App';
import { useMediaQuery } from './hooks';

const Entry = React.memo(() => {
	const isMobile = useMediaQuery('(max-width: 700px)');

	React.useEffect(() => {
		const site = window.location.href;

		if ((/\/\/m\./.test(site) && isMobile) || (!/\/\/m\./.test(site) && !isMobile)) return;

		window.location.href = isMobile ? 'http://m.localhost:3030' : 'http://localhost:3030';
	}, [isMobile]);

	return <App isMobile={isMobile} />;
});

export default Entry;
