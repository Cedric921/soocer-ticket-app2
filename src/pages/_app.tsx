import '@/styles/globals.css';
import Layout from '@/components/admin/layout';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import ToastManager from '@/components/global/loaders/ToastManager';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>soccer-ticket</title>
			</Head>
			<Provider store={store}>
				<SessionProvider session={pageProps.session}>
					<Layout>
						<Component {...pageProps} />
						<ToastManager />
					</Layout>
				</SessionProvider>
			</Provider>
		</>
	);
}
