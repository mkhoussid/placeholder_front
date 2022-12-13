import React from 'react';
import Layout from 'src/components/Layout';
import { Landing } from 'src/pages';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { init } from 'src/core/redux/actions';
import { generatePath } from 'src/core/utils';
import { Redirect, uris } from './router';
// import ReduxToastr from 'react-redux-toastr';
import { ThemeContext } from 'src/theme/ThemeProvider';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import PrivateRoute from './router/PrivateRoute';
import Suspense from './components/Suspense';
import { GlobalStyles } from './styles';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

interface AppProps {
	isMobile: boolean;
}
const App: React.FC<AppProps> = React.memo(({ isMobile }) => {
	const dispatch = useDispatch();
	const { theme } = React.useContext(ThemeContext);

	React.useEffect(() => {
		dispatch(init({ payload: { isMobile } }));
	}, []);

	return (
		<EmotionThemeProvider theme={theme}>
			{GlobalStyles({ theme })}
			<Routes>
				<Route path={uris.HOME} element={<Layout isMobile={isMobile} />}>
					<Route path={uris.HOME} element={<Landing />} />
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
			{/* <ReduxToastr
				timeOut={6000}
				newestOnTop={false}
				preventDuplicates
				position='top-right'
				//@ts-expect-error idk
				getState={(state) => state.app.ui.toastr}
				transitionIn='fadeIn'
				transitionOut='fadeOut'
				progressBar
				closeOnToastrClick
			/> */}
		</EmotionThemeProvider>
	);
});

export default App;
