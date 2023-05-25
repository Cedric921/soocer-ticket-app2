import { ConfigProvider, Dropdown } from 'antd';
import React from 'react';
import fr from 'antd/locale/fr_FR';
import Asidebar from './Asidebar';
import { FaRegWindowClose, FaUserAlt } from 'react-icons/fa';
import Header from './Header';
import { useRouter } from 'next/router';
import { checkAdminRoute } from '@/utils/checkers';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	const router = useRouter();

	const [showAside, setShowAside] = React.useState(true);
	const [onMobile, setOnMobile] = React.useState(false);
	const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
	React.useEffect(() => {
		const onResize = () => {
			setOnMobile(window.innerWidth <= 900);
			// setShowAside(window.innerWidth > 900);
		};
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#000009',
					fontFamily: '',
					colorText: '#494949',
				},
			}}
			locale={fr}
		>
			{checkAdminRoute(router.pathname) ? (
				<div
					className={`${
						isDarkMode ? 'dark' : 'light'
					} w-full h-screen max-h-screen flex duration-500`}
				>
					<aside
						className={` bg-slate-50 dark:bg-black/90 dark:text-white shadow-md p-2	${
							onMobile ? 'absolute z-30 h-screen' : 'relative max-w-[15rem] '
						} ${showAside ? 'min-w-[15rem]  w-1/6 max-w-[300px]' : 'w-0'}`}
					>
						{onMobile && (
							<span
								className='absolute text-xl top-2 right-2'
								onClick={() => setShowAside(false)}
							>
								<FaRegWindowClose />
							</span>
						)}
						<Asidebar onMobile={onMobile} showAside={showAside} />
					</aside>
					<main className={`w-full ${showAside ? '' : 'max-w-screen'}`}>
						<Header
							setShowAside={setShowAside}
							darkMode={isDarkMode}
							setDarkMode={setIsDarkMode}
						/>
						<div className='w-full p-0 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto'>
							<div
								className='
						w-full min-h-full bg-slate-100 dark:bg-black/80
						shadow-[0px_20px_20px_10px_#00000024] 
						 p-4
						'
							>
								{children}
							</div>
						</div>
					</main>
				</div>
			) : (
				<>{children}</>
			)}
		</ConfigProvider>
	);
};

export default Layout;
