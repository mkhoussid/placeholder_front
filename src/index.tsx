import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './redux/store';
import { ThemeProvider } from './theme/ThemeProvider';
import Entry from './Entry';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<Provider store={store}>
		<ThemeProvider>
			<Router>
				<Entry />
			</Router>
		</ThemeProvider>
	</Provider>,
);
