import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './theme/ThemeProvider';
import Entry from './Entry';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ThemeProvider>
		<Router>
			<Entry />
		</Router>
	</ThemeProvider>,
);
