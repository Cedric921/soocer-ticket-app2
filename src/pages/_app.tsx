import '@/styles/globals.css';
import { checkAdminRoute } from '@/utils/checkers';
import Layout from '@/components/admin/layout';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	console.log(router);
	if (checkAdminRoute(router.pathname))
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	return <Component {...pageProps} />;
}
