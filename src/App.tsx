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
import { Spinner } from './components/ui';
import { Login } from './features/auth/components';

const App = React.memo(() => {
	const { theme } = React.useContext(ThemeContext);
	const initLoading = useStore($initLoading);
	const serverError = useStore($serverError);
	const navigate = useNavigateParams();

	React.useEffect(() => {
		init();
	}, []);

	React.useEffect(() => {
		if (serverError) {
			navigate({ uri: uris.ERROR });
		}
	}, [serverError]);

	return (
		<EmotionThemeProvider theme={theme}>
			{GlobalStyles({ theme })}
			{initLoading ? (
				<Spinner />
			) : (
				<Routes>
					<Route path={uris.ROOT} element={<Layout />}>
						<Route path={uris.AUTH.ROOT}>
							<Route path={uris.AUTH.LOGIN} element={<Login />} />
							<Route
								path='*'
								element={
									<Redirect
										to={generatePath({
											uri: uris.AUTH.ROOT,
										})}
									/>
								}
							/>
						</Route>
						<Route path={uris.SANDBOX} element={<SandboxPage />} />
						<Route path={uris.ROOT} element={<Landing />} />
						<Route path={uris.ERROR} element={<Error />} />
						<Route
							path='*'
							element={
								<Redirect
									to={generatePath({
										uri: uris.ROOT,
									})}
								/>
							}
						/>
					</Route>
				</Routes>
			)}
		</EmotionThemeProvider>
	);
});

export default App;
