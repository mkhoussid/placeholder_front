import * as React from 'react';
import Page from 'src/components/Page';
import Sandbox from 'src/components/Sandbox';

const SandboxPage = React.memo(() => {
	return (
		<Page title='Sandbox | Home'>
			<Sandbox />
		</Page>
	);
});

export default SandboxPage;
