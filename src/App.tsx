import React from 'react';
import Layout from 'src/components/Layout';
import { Landing } from 'src/pages';
import { Routes, Route } from 'react-router-dom';
import { init } from 'src/features/core/effector/actions';
import { generatePath } from 'src/utils';
import { Redirect, uris } from './router';
import { ThemeContext } from 'src/theme/ThemeProvider';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import PrivateRoute from './router/PrivateRoute';
import Suspense from './components/Suspense';
import { GlobalStyles } from './styles';
import { useStore } from 'effector-react';
import { $initLoading, $serverError } from './features/core/effector/store';
import Error from './components/Layout/Error';

import 'src/assets/styles.css';
import { useNavigateParams } from './hooks';
import SandboxPage from './pages/Sandbox';

interface AppProps {
	isMobile: boolean;
}
const App: React.FC<AppProps> = React.memo(({ isMobile }) => {
	const { theme } = React.useContext(ThemeContext);
	const initLoading = useStore($initLoading);
	const serverError = useStore($serverError);
	const navigate = useNavigateParams();

	React.useEffect(() => {
		init({ payload: { isMobile } });
	}, []);

	React.useEffect(() => {
		if (serverError) {
			navigate({ uri: uris.ERROR });
		}
	}, [serverError]);

	if (initLoading) {
		return <div>loading</div>;
	}

	return (
		<EmotionThemeProvider theme={theme}>
			{GlobalStyles({ theme })}
			<Routes>
				<Route path={uris.HOME} element={<Layout isMobile={isMobile} />}>
					<Route path={uris.SANDBOX} element={<SandboxPage />} />
					<Route path={uris.HOME} element={<Landing />} />
					<Route path={uris.ERROR} element={<Error />} />
					<Route
						path='*'
						element={
							<Redirect
								to={generatePath({
									uri: uris.HOME,
								})}
							/>
						}
					/>
				</Route>
			</Routes>
		</EmotionThemeProvider>
	);
});

export default App;
