import NextProgressBar from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReduxToastrLib from 'react-redux-toastr';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import Loader from '@/components/ui/loader/Loader';

import { persistor, store } from '@/store/store';


const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	const queryClient = new QueryClient();

	return (
		<>
			<NextProgressBar
				color='#FF7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate persistor={persistor} loading={<Loader duration={5} />}>
						{children}
						<ReduxToastrLib
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={3000}
							transitionIn='fadeIn'
							transitionOut='fadeOut'
						/>
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</>
	);
};

export default AppProvider;