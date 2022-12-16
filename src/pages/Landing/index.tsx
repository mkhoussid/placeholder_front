import * as React from 'react';
import Page from 'src/components/Page';
import Landing from 'src/components/Landing';

const LandingPage = React.memo(() => {
	return (
		<Page title='Placeholder | Home'>
			<Landing />
		</Page>
	);
});

export default LandingPage;
