import type { AppProps } from 'next/app';

import AppProvider from '../app/provider/AppProvider';
import AuthProvider from '../app/provider/AuthProvider';
import { TypeComponentAuthFields } from '../app/provider/private-route.interface';

import 'styles/globals.scss';


type TypeAppProps = AppProps & TypeComponentAuthFields;

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<AppProvider>
			<AuthProvider Component={Component}>
				<Component {...pageProps} />
			</AuthProvider>
		</AppProvider>
	);
}

export default MyApp;