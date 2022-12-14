import * as React from 'react';
import Page from 'src/components/Page';
import Landing from 'src/components/Landing';

const LandingPage = React.memo(() => {
	// const navigate = useNavigateParams();
	// const user = useSelector((state: IState) => state.app.features.auth.user);

	React.useEffect(() => {
		// if (user) {
		// 	navigate({ uri: uris.USER.DASHBOARD, replace: true });
		// }
	}, []);

	return (
		<Page title='Placeholder | Home'>
			<Landing />
		</Page>
	);
});

export default LandingPage;
