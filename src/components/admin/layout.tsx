import { ConfigProvider, Dropdown } from 'antd';
import React from 'react';
import fr from 'antd/locale/fr_FR';
import Asidebar from './Asidebar';
import { FaRegWindowClose, FaUserAlt } from 'react-icons/fa';
import Header from './Header';

interface ILayout {
	children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
	const [showAside, setShowAside] = React.useState(true);
	// Manage responsive sidebar
	const [onMobile, setOnMobile] = React.useState(false);
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
			<div className='w-full h-screen max-h-screen flex duration-500'>
				<aside
					className={`w-1/6 max-w-[300px] bg-slate-50 shadow-md p-2	${
						onMobile ? 'absolute z-30 h-screen' : 'relative max-w-[15rem] '
					} ${showAside ? 'min-w-[15rem] w-1/4' : 'w-0'}`}
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
					<Header setShowAside={setShowAside} />
					<div className='w-full p-4 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto'>
						<div className='w-full min-h-full bg-slate-100 shadow-[0px_20px_20px_10px_#00000024] rounded-xl p-4'>
							{children}
						</div>
					</div>
				</main>
			</div>
		</ConfigProvider>
	);
};

export default Layout;
